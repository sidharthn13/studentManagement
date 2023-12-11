const Students = require("../models/students")
const studentsRepository= {
    createIfNotExists:async function(data){
        const searchResult = await Students.findOrCreate({
            where: { name: data.name },
            defaults: data,
          });
          return searchResult;
    },
    getAllEntries: async function(){
        const searchResult = await Students.findAll();
        return searchResult
    },
    getByID: async function(id){
        const searchResult = await Students.findByPk(id);
        return searchResult
    }
};
module.exports = studentsRepository