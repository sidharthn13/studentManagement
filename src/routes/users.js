const express = require("express")
const usersRouter = express.Router()
const authenticationMiddleware = require("../middleware/authenticationMiddleware")
const authorizationMiddleware = require("../middleware/authorizationMiddleware")
const usersController = require("../controllers/users")
usersRouter.post("/users",express.json(),authenticationMiddleware,authorizationMiddleware.createUser,
usersController.createUser)
module.exports = usersRouter;

