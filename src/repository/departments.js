const departments = require("../models/departments")
const departmentsRepository ={
    createIfNotExists: async function(data){
        const searchResult = await departments.findOrCreate({
            where:{departmentName:data.departmentName},
            defaults:data
        });
        return searchResult;
    },
}
module.exports = departmentsRepository