const loginRepository = require("../repository/login")
const jwt = require('jsonwebtoken')
module.exports = {
    findUser: async(req,res)=>{
        const email = req.body.email;
        const password = req.body.password;
        const searchResult = await loginRepository.find(email,password)
        if(!searchResult){return res.status(404).json({Error: "No such user exists"})}
        //test
        console.log(searchResult)
        res.json({success: searchResult})
    }
}