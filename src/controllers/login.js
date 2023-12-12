const loginService = require("../service/login");
const loginController = {
  userLogin: loginService.findUser,
};
module.exports = loginController;
