const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/authControllers/loginController");

router.post("/", loginController.handleLogin);

module.exports = router;
