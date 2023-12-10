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
    }
}
module.exports = departmentsRepository