const express = require("express");
const scoresRouter = express.Router();
const validateScoresData = require("../middleware/scores")
const scoresController = require("")
const authenticationMiddleware = require("../middleware/authenticationMiddleware")
const authorizationMiddleware = require("../middleware/authorizationMiddleware");
scoresRouter.post(validateScoresData.validateInputFields,
    authenticationMiddleware,
    authorizationMiddleware.createByStaff,
    scoresController.addScore)