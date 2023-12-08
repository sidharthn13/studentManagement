const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config({ path: "/home/sidharth/Git-Commits/Student-Management/studentManagement/.env" });
const authenticationMiddleware = (req,res,next)=>{
    const token = req.cookie.accessToken;
    if(!token){return res.end("Please login")}
    jwt.verify( token, process.env.SECRET_KEY, (error, result) => {
        if (error) {
            return res.status(400).json({ Error: `${error}` })}
        next()
    })

}
module.exports = authenticationMiddleware
        
