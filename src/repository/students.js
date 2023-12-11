const Students = require("../models/students")
const studentsRepository= {
    createIfNotExists:async function(data){
        const searchResult = await Students.findOrCreate({
            where: { name: data.name },
            defaults: data,
          });
          return searchResult;
    },
};
module.exports = studentsRepository