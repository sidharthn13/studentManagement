const { jwtDecode }  = require("jwt-decode")
const dotenv = require("dotenv");
dotenv.config({ path: "/home/sidharth/Git-Commits/Student-Management/studentManagement/.env" });
const authorizationMiddleware = {
    createUser:(req,res,next)=>{
    const token = req.headers.cookie.split("=")[1];
    const decodedToken = jwtDecode(token);
    if(decodedToken.role != 1){return res.end("this user is not authorized to perform the action")} 
    req.body.createdBy = decodedToken.userID
    next()
},
}
module.exports = authorizationMiddleware;