const localhost = "http://localhost:3600/routes";

const url = {
  register: `${localhost}/register`,
  login: `${localhost}/login`,
  logout: `${localhost}/logout`,
  refresh: `${localhost}/refresh`,
  getAccountDetails: `${localhost}/api/accounts`,
};

export default url;
