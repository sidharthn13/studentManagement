const express = require("express");
const usersRouter = express.Router();
const validateUsersData = require("../middleware/users");
const authenticationMiddleware = require("../middleware/authenticationMiddleware");
const authorizationMiddleware = require("../middleware/authorizationMiddleware");
const usersController = require("../controllers/users");
usersRouter.post(
  "/users",
  express.json(),
  validateUsersData,
  authenticationMiddleware,
  authorizationMiddleware.createByAdmin,
  usersController.createUser
);
module.exports = usersRouter;
