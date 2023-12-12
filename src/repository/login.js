const users = require("../models/users");
const loginRepository = {
  find: async function (emailID, pass) {
    const result = await users.findOne({
      where: { email: emailID, password: pass },
    });
    return result;
  },
};
module.exports = loginRepository;
