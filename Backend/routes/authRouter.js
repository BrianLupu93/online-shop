const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.handleLogin);
router.post("/logout", authController.handleLogout);
router.post("/register", authController.createNewAccount);
router.post("/refresh", authController.handleRefreshToken);

module.exports = router;
