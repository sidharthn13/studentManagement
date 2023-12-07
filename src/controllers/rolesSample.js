const rolesSampleService = require("../service/rolesSample.js");
const rolesSampleController = {
  getUsers: rolesSampleService.getRole,
  createUser: rolesSampleService.createRole,
};
module.exports = rolesSampleController;
