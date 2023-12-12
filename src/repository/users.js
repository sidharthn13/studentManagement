const users = require("../models/users.js");
const usersRepository = {
  createIfNotExists: async function (data) {
    const searchResult = await users.findOrCreate({
      where: { email: data.email },
      defaults: data,
    });
    return searchResult;
  },
};
module.exports = usersRepository;
