const express = require("express")
const usersRouter = express.Router()
const authenticationMiddleware = require("../middleware/authenticationMiddleware")
const authorizationMiddleware = require("../middleware/authorizationMiddleware")
const usersController = require("../controllers/users")
usersRouter.post("/users",authenticationMiddleware,authorizationMiddleware.createUser,usersController)
module.exports = usersRouter;