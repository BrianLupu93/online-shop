const productsDB = {
  products: require("../model/products.json"),
  setProducts: function (data) {
    this.products = data;
  },
};
const path = require("path");
const fsPromises = require("fs").promises;
const { v4: uuid } = require("uuid");

//**********************************************************
//***************** ADD NEW PRODUCT ************************
//**********************************************************

const addNewProduct = async (req, res) => {
  const product = req.body;

  if (!product.category || !product.price)
    return res
      .status(400)
      .json({ message: "Product id, category and price are required field" });

  const productArray = Object.entries(product);

  const filteredArray = productArray.filter((item) => item[1] !== "");

  const filteredObject = Object.fromEntries(filteredArray);

  const reviews = Math.floor(Math.random() * 23);
  const starsNr = Math.floor(Math.random() * (5 - 2) + 2);
  const starsArray = [];
  for (let i = 0; i <= starsNr; i++) {
    starsArray.push(i);
  }

  const currentProduct = {
    ...filteredObject,
    id: uuid(),
    reviews: reviews,
    stars: starsArray,
  };

  console.log(currentProduct);

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

//**********************************************************
//***************** GET ALL PRODUCTS ***********************
//**********************************************************

const getAllProducts = (req, res) => {
  const products = productsDB.products;

  res.status(200).json(products);
};

//**********************************************************
//********************** ADD TO CART ***********************
//**********************************************************

const addProductToCart = async (req, res) => {
  const productId = req.params.id;

  if (!productId) return res.status(401).json("Product id invalid or missing");

  const foundProduct = productsDB.products.find(
    (prod) => prod.id === productId
  );

  if (!foundProduct)
    return res.status(401).json(`Product with id ${productId} not found`);

  const arrayProduct = Object.entries(foundProduct);

  const filteredProduct = arrayProduct.filter(
    (row) => row[0] !== "stock" && row[0] !== "order"
  );

  const objectProduct = Object.fromEntries(filteredProduct);

  res.status(201).json(objectProduct);
};

module.exports = { addNewProduct, getAllProducts, addProductToCart };
