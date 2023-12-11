const studentsRepository = require("../repository/students");
const studentsService = {
  create: async (req, res) => {
    try{
    const data = req.body;
    const newStudent = await studentsRepository.createIfNotExists(data);
    if (!newStudent[1]) {
      return res.status(400).json({Error:"student already exists"});
    }
    return res.status(200).json({Success:"student created"});}
    catch(error){return res.status(500).json({ Error: error });}
  },
};
module.exports = studentsService;
