const usersRepository = require("../repository/users")
const usersService = {
    create:(req,res)=>{
        console.log(req.body)
        res.end("user created")
    }
}
module.exports = usersService