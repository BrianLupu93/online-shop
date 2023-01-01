const accountsDB = {
  accounts: require("../../model/accounts.json"),
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

  if (match) {
    const accessToken = jwt.sign(
      {
        user: {
          id: foundAccount.id,
          isAmin: foundAccount.isAdmin,
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
      path.join(__dirname, "..", "..", "model", "accounts.json"),
      JSON.stringify(accountsDB.accounts)
    );

    // store the jwt with cookies not accesible with js

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
