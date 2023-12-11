const scoresService = require("../service/scores") 
const scoresController = {
    addScore: scoresService.addScore,
}
module.exports = scoresController