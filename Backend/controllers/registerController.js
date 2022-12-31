const accountsDB = {
  accounts: require("../model/accounts.json"),
  setAccounts: function (data) {
    this.accounts = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");

const createNewAccount = async (req, res) => {
  const { firstName, lastName, email, adress, pwd } = req.body;
  if (!firstName || !lastName || !email || !adress || !pwd)
    return res.status(400).json("All the register fields are required!");
  // check if email already exist

  const duplicate = accountsDB.accounts.find(
    (account) => account.email === email
  );

  if (duplicate) return res.status(409).json("The email is already used!");

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

module.exports = { createNewAccount };
