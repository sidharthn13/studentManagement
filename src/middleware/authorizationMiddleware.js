const { jwtDecode } = require("jwt-decode");
const dotenv = require("dotenv");
dotenv.config({
  path: "/home/sidharth/Git-Commits/Student-Management/studentManagement/.env",
});
const authorizationMiddleware = {
  createByAdmin: (req, res, next) => {
    const token = req.headers.cookie.split("=")[1];
    const decodedToken = jwtDecode(token);
    if (decodedToken.role != 1) {
      return res.end("this user is not authorized to perform the action");
    }
    req.body.createdBy = decodedToken.userID;
    next();
  },
  accessByAdmin: (req,res,next)=>{
    const token = req.headers.cookie.split("=")[1];
    const decodedToken = jwtDecode(token);
    if (decodedToken.role != 1) {
      return res.end("this user is not authorized to perform the action");
    }
    next();
  },
  updateByAdmin: 
  (req, res, next) => {
    const token = req.headers.cookie.split("=")[1];
    const decodedToken = jwtDecode(token);
    if (decodedToken.role != 1) {
      return res.end("this user is not authorized to perform the action");
    }
    req.body.updatedBy = decodedToken.userID;
    next()
},
createByStaff:(req, res, next) => {
  const token = req.headers.cookie.split("=")[1];
  const decodedToken = jwtDecode(token);
  if (decodedToken.role != 2) {
    return res.end("this user is not authorized to perform the action");
  }
  req.body.createdBy = decodedToken.userID;
  next();
},
accessByAdminAndStaff:(req,res,next)=>{
  const token = req.headers.cookie.split("=")[1];
  const decodedToken = jwtDecode(token);
  if (decodedToken.role != 1 && decodedToken.role != 2) {
    return res.end("this user is not authorized to perform the action");
  }
  next()
}
}
module.exports = authorizationMiddleware;
