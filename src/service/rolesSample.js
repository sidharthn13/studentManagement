const rolesSampleRepository = require("../repository/rolesSample.js");
module.exports = {
  createRole: async (req, res) => {
    const data = req.body.role;
    try {
      const [result, accountCreated] =
        await rolesSampleRepository.createNewUser(data);
      if (!accountCreated) {
        throw Error("Department already exists in database");
      }
      res.status(200).json({ Success: "department added" });
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  },
  getRole: (req, res) => {
    return res.end("request received");
  },
};
