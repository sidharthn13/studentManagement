const departmentsRepository = require("../repository/departments");
const departmentsService = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const newDepartment = await departmentsRepository.createIfNotExists(data);
      if (!newDepartment[1]) {
        return res.status(400).end("department already exists");
      }
      return res.status(200).end("department created");
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await departmentsRepository.getAllEntries();
      res.status(200).json({ Departments: data });
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
  getByID: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await departmentsRepository.getByID(id);
      res.status(200).json({ Department: data });
    } catch (error) {
      return res.status(400).json({ Error: error });
    }
  },
  deleteByID: async(req,res)=>{
    try{
        const id = req.params.id;
        deleted = await departmentsRepository.deleteByID(id);
        if(deleted==0){return res.status(400).json({Error:"No dept with that id"})}
        return res.status(200).json({success:`dept with id ${id} deleted from DB`})
    }
    catch(error){
        return res.status(500).json({Error:error})
    }
  },
};
module.exports = departmentsService;
