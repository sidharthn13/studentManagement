const departmentsRepository = require("../repository/departments")
const departmentsService ={
    create: async (req,res)=>{
        try{
            const data = req.body;
            const newDepartment = await departmentsRepository.createIfNotExists(data)
            if(!newDepartment[1]){return res.status(400).end("department already exists")}
            return res.status(200).end("department created")
        }
        catch(error){
            return res.status(500).json({"Error":error});
        }
    },
    getAll: async(req,res)=>{
        try{
            const data = await departmentsRepository.getAllEntries();
            res.status(200).json({"Departments":data}) 
        }
        catch(error){
            return res.status(500).json({"Error":error});
        }
    }
}
module.exports = departmentsService