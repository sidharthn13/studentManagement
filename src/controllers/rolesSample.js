const sequelize = require("../config/database.js");
const rolesSample = require("../models/rolesSample.js");
const rolesSampleController = {
  get: (req, res) => {
    return res.end("request received");
  },
  post: async (req, res) => {
    const data = req.body.role;
    console.log(data);

    try {
      const [result, accountCreated] = await rolesSample.findOrCreate({
        where: { role: data },
        defaults: {
          role: data,
        },
      });
      if (!accountCreated) {
        throw Error("Department already exists in database");
      }
      res.status(200).json({ Success: "department added" });
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  },
};

module.exports = rolesSampleController;
