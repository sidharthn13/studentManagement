const usersRepository = require("../repository/users");
const usersService = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const newUser = await usersRepository.createIfNotExists(data);
      if (!newUser[1]) {
        return res.status(400).end("user already exists");
      }
      return res.status(200).end("user created");
    } catch (error) {
      res.status(500).json({ Error: error });
    }
  },
};
module.exports = usersService;
