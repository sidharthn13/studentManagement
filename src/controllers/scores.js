const scoresService = require("../service/scores");
const scoresController = {
  addScore: scoresService.addScore,
  updateScore: scoresService.updateScore,
};
module.exports = scoresController;
