const rolesSample = require("../models/rolesSample.js");
module.exports = {
  createNewUser: function (data) {
    return rolesSample.findOrCreate({
      where: { role: data },
      defaults: {
        role: data,
      },
    });
  },
};

