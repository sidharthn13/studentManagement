const usersService = require("../service/users");
const usersController = {
  createUser: usersService.create,
};
module.exports = usersController;
