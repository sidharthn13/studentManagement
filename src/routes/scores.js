const express = require("express");
const scoresRouter = express.Router();
const validateScoresData = require("../middleware/scores");
const scoresController = require("../controllers/scores");
const authenticationMiddleware = require("../middleware/authenticationMiddleware");
const authorizationMiddleware = require("../middleware/authorizationMiddleware");
scoresRouter.post(
  "/scores",
  validateScoresData.validateInputFields,
  authenticationMiddleware,
  authorizationMiddleware.createByStaff,
  scoresController.addScore
);
scoresRouter.put(
  "/scores",
  validateScoresData.validateInputFields,
  authenticationMiddleware,
  authorizationMiddleware.updateByStaff,
  scoresController.updateScore
);
module.exports = scoresRouter;
