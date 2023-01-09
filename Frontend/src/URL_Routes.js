const localhost = "http://localhost:3600/routes";

const url = {
  register: `${localhost}/register`,
  login: `${localhost}/login`,
  logout: `${localhost}/logout`,
  refresh: `${localhost}/refresh`,
  getAccountDetails: `${localhost}/api/accounts`,
  addNewProduct: `${localhost}/api/add-new-product`,
  getProducts: `${localhost}/api/get-products`,
  getProduct: `${localhost}/api/get-product`,
  addToCart: `${localhost}/api/add-to-cart`,
};

export default url;
