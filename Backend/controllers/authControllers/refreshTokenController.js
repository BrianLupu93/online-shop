const accountsDB = {
  accounts: require("../../model/accounts.json"),
  setAccounts: function (data) {
    this.accounts = data;
  },
};

const jwt = require("jsonwebtoken");
require("dotenv").config();

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

module.exports = { handleRefreshToken };
