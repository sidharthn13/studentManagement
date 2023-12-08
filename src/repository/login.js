const users = require("../models/users");
const loginRepository = {
    find:  function(emailID, pass){
        const result =  users.findOne({where:{email:emailID,password:pass}})  
        return result
    }
}
module.exports = loginRepository

