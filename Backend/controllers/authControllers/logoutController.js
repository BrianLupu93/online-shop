const accountsDB = {
  accounts: require("../../model/accounts.json"),
  setAccounts: function (data) {
    this.accounts = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");

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
    path.join(__dirname, "..", "..", "model", "accounts.json"),
    JSON.stringify(accountsDB.accounts)
  );
  res.clearCookie("jtw", { httpOnly: true }, { maxAge: 24 * 60 * 60 * 1000 });
  res.sendStatus(204);
};

module.exports = { handleLogout };
