const accountsDB = {
  accounts: require("../model/accounts.json"),
  setAccounts: function (data) {
    this.accounts = data;
  },
};

const getAccountDetails = async (req, res) => {
  const id = req.params.id;

  if (!id)
    return res.status(400).json({ message: "Missing or Wrong :id params" });

  const foundAccount = accountsDB.accounts.find((account) => account.id === id);

  console.log(foundAccount);
  if (!foundAccount)
    return res
      .status(401)
      .json({ message: `The account with id ${id} was not found` });

  res.status(201).json(foundAccount);
};

module.exports = { getAccountDetails };
