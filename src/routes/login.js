const express = require("express")
const loginRouter = express.Router()
const validateLoginData = require("../middleware/login")
const loginController = require("../controllers/login")

loginRouter.get("/login",validateLoginData,loginController.userLogin)
module.exports = loginRouter