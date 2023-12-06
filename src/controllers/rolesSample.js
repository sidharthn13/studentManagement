const sequelize = require("../config/database.js")
const rolesSampleController = {
    get:(req, res) => {
        return res.end("request received");
      },
    post:(req,res)=>{
        const payload = req.body
        console.log(payload.role)
        res.end(payload.role)
    }
}
  
  module.exports = rolesSampleController ;