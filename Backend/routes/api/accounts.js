const express = require("express");
const router = express.Router();
const accountsController = require("../../controllers/accountsController");

router.get("/accounts/:id", accountsController.getAccountDetails);

module.exports = router;
