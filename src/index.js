const express = require("express");
const app = express();
const sequelize = require("./config/database.js")
const { rolesSampleRouter } = require("./routes/rolesSample.js");

const roles = require("./models/roles.js")
const users = require("./models/users.js")
const students = require("./models/students.js")
const departments = require("./models/departments.js");
const scores = require("./models/scores.js")

app.use("/v1", rolesSampleRouter);
app.listen(3000, async() => {
  // console.log("Server listening at port 3000");
  // students.sync().then(console.log("student table created"));
  // departments.sync().then(console.log("departments table created"));
  // roles.sync().then(console.log("roles table created"));
  // scores.sync().then(console.log("scores table created"));
  // users.sync().then(console.log("users table created"));

  await sequelize.sync();
  // await sequelize.drop()

  
  // sequelize.sync().then(console.log("all tables created"));
  // generate_rows()
});



//testing

// async function generate_rows() {
//   const departmentData = [
//     {
//       departmentName:"cs",
//       createdBy:"gtm",
//       updatedBy:"sid"
//     },
//   ];
//   const studentData= [
//     {
//       name:"atul",
//       department:1,
//       createdBy:"staff",  
//       updatedBy:"staff"
//     }
//   ];
//   try {
//     const department = await departments.bulkCreate(departmentData);
//     const student = await students.bulkCreate(studentData);
//   } catch (error) {
//     console.log(`warning, error: ${error}`);
//   }
// }
