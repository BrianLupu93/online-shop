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

  const productArray = Object.entries(product);

  const filteredArray = productArray.filter((item) => item[1] !== "");

  const filteredObject = Object.fromEntries(filteredArray);

  const currentProduct = { ...filteredObject, id: uuid() };

  try {
    productsDB.setProducts([...productsDB.products, currentProduct]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "products.json"),
      JSON.stringify(productsDB.products)
    );

    res.status(201).json({ message: "New product added successfully!" });
  } catch (err) {
    res.err.message;
  }
};

const getAllProducts = (req, res) => {
  const products = productsDB.products;

  res.status(200).json(products);
};

module.exports = { addNewProduct, getAllProducts };
