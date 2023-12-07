const sequelize = require("../config/database.js");
const rolesSample = require("../models/rolesSample.js");
const rolesSampleService = require("../service/rolesSample.js")
const rolesSampleController = {
  getUsers: rolesSampleService.getRole,
  createUser: rolesSampleService.createRole
};

module.exports = rolesSampleController;
