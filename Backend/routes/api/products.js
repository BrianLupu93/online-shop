const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/productsController");

router.post("/add-new-product", productsController.addNewProduct);
router.get("/get-products", productsController.getAllProducts);
router.get("/add-to-cart/:id", productsController.addProductToCart);

module.exports = router;
