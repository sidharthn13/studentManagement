const sequelize = require("../config/database.js");
const rolesSample = require("../models/rolesSample.js");
const rolesSampleService = require("../service/rolesSample.js")
const rolesSampleController = {
  get: (req, res) => {
    return res.end("request received");
  },
  post: rolesSampleService.createRole
};

module.exports = rolesSampleController;
