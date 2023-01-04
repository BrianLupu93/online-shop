const productsDB = {
  products: require("../model/products.json"),
  setProducts: function (data) {
    this.products = data;
  },
};
const path = require("path");
const fsPromises = require("fs").promises;
const { v4: uuid } = require("uuid");

const addNewProduct = async (req, res) => {
  const product = req.body;
  if (!product.category || !product.price)
    return res
      .status(400)
      .json({ message: "Product id, category and price are required field" });

  const currentProduct = { ...product, id: uuid() };

  productsDB.setProducts([...productsDB.products, currentProduct]);

  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "products.json"),
    JSON.stringify(productsDB.products)
  );

  res.status(201).json({ message: "New product added successfully!" });
};

module.exports = { addNewProduct };
