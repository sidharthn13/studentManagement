const loginRepository = require("../repository/login");
const dotenv = require("dotenv");
dotenv.config({
  path: "/home/sidharth/Git-Commits/Student-Management/studentManagement/.env",
});
const jwt = require("jsonwebtoken");
module.exports = {
  findUser: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const searchResult = await loginRepository.find(email, password);
    if (!searchResult) {
      return res.status(404).json({ Error: "No such user exists" });
    }
    const secretKey = process.env.SECRET_KEY;
    const tokenPayload = { userID: searchResult.id, role: searchResult.role };
    const jwtToken = jwt.sign(tokenPayload, secretKey, { expiresIn: "10m" });
    res.cookie("jwtToken", jwtToken, { httpOnly: true });
    return res.status(200).end("log in successful");
  },
};
