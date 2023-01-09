const accountsDB = {
  accounts: require("../model/accounts.json"),
  setAccounts: function (data) {
    this.accounts = data;
  },
};
// to comparte the typed pwd.bcrypt with hashpwd saved in the account data
require("dotenv").config();

const bcrypt = require("bcrypt");
const fsPromises = require("fs").promises;
const path = require("path");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

// **************************************************
// ******************* LOGIN ***********************
// **************************************************

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;

  // check if recive user and pwd
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and Password are required!" });

  //  check if the account really exist
  const foundAccount = accountsDB.accounts.find(
    (account) => account.email === user
  );

  if (!foundAccount)
    return res.status(401).json({ message: "The username does not exist!" });

  // if the user exist check if the password match  bcrypt.compare(typedPWD, storedPWD)
  const match = await bcrypt.compare(pwd, foundAccount.password);

  if (!match) return res.status(401).json({ message: "Wrong Password" });

  if (match) {
    let isAdmin = false;

    if (foundAccount.isAdmin) isAdmin = true;

    const accessToken = jwt.sign(
      {
        user: {
          id: foundAccount.id,
          isAdmin: foundAccount.isAdmin,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    const refreshToken = jwt.sign(
      {
        user: {
          id: foundAccount.id,
        },
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const otherAccounts = accountsDB.accounts.filter(
      (account) => account.username !== foundAccount.username
    );

    // add the refresh token detail to the foundet account
    const currentAccount = { ...foundAccount, refreshToken };

    accountsDB.setAccounts([...otherAccounts, currentAccount]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "accounts.json"),
      JSON.stringify(accountsDB.accounts)
    );

    // store the jwt with cookies not accesible with js

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      token: accessToken,
      userId: currentAccount.id,
      isAdmin: isAdmin,
      message: "Login successfully!",
    });
  } else {
    res.sendStatus(401);
  }
};

// **************************************************
// ******************* LOGOUT ***********************
// **************************************************

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // no content to send back

  const refreshToken = cookies.jwt;

  // search for refresh token in the account

  const foundAccount = accountsDB.accounts.find(
    (account) => account.refreshToken === refreshToken
  );

  if (!foundAccount) {
    res.clearCookie("jtw", { httpOnly: true }, { maxAge: 24 * 60 * 60 * 1000 });
    return res.sendStatus(204);
  }

  // delete the refresh token in the accountsDB

  const otherAccounts = accountsDB.accounts.filter(
    (account) => account.refreshToken !== refreshToken
  );
  const currentAccount = { ...foundAccount, refreshToken: "efergeger" };
  accountsDB.setAccounts([...otherAccounts, currentAccount]);

  // write the DB file with the new data

  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "accounts.json"),
    JSON.stringify(accountsDB.accounts)
  );
  res.clearCookie("jtw", { httpOnly: true }, { maxAge: 24 * 60 * 60 * 1000 });
  res.sendStatus(204);
};

// **************************************************
// ******************* REGISTER *********************
// **************************************************

const createNewAccount = async (req, res) => {
  const { firstName, lastName, email, adress, pwd } = req.body;
  if (!firstName || !lastName || !email || !adress || !pwd)
    return res
      .status(400)
      .json({ message: "All the register fields are required!" });
  // check if email already exist

  const duplicate = accountsDB.accounts.find(
    (account) => account.email === email
  );

  if (duplicate)
    return res.status(409).json({ message: "The email is already used!" });

  try {
    // encript the user pwd
    const hashedPwd = await bcrypt.hash(pwd, 10);

    // store the new user

    const newAccount = {
      id: uuid(),
      username: email,
      email: email,
      password: hashedPwd,
      firstName: firstName,
      lastName: lastName,
      adress: adress,
      isAdmin: false,
    };

    // add the accout in the users
    accountsDB.setAccounts([...accountsDB.accounts, newAccount]);

    // write the accounts.json file

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "accounts.json"),
      JSON.stringify(accountsDB.accounts)
    );

    res
      .status(201)
      .json({ message: `New account with username ${email} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// **************************************************
// ******************* REFRESH **********************
// **************************************************

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;

  const foundAccount = accountsDB.accounts.find(
    (account) => account.refreshToken === refreshToken
  );
  if (!foundAccount) return res.sendStatus(403); // Forbidden
  // evaluate password
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundAccount.id !== decoded.id) return res.sendStatus(403);

    const isAdmin = Object.values(foundAccount.isAdmin);

    const accessToken = jwt.sign(
      {
        user: {
          id: decoded.id,
          isAmin: isAdmin,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    res.json({ accessToken });
  });
};

module.exports = {
  handleLogout,
  handleLogin,
  createNewAccount,
  handleRefreshToken,
};
