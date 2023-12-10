const departments = require("../models/departments")
const departmentsRepository ={
    createIfNotExists: async function(data){
        const searchResult = await departments.findOrCreate({
            where:{departmentName:data.departmentName},
            defaults:data
        });
        return searchResult;
    },
    getAllEntries: async function(){
        const searchResult =await departments.findAll()
        return searchResult;
    },
    getByID: async function(id){
        const searchResult = await departments.findByPk(id)
        return searchResult;
    },
    deleteByID: async function(id){
        const result = await departments.destroy({ where: { id: id } }); 
        return result
    }
}
module.exports = departmentsRepository