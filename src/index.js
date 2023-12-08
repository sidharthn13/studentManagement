const express = require("express");
const app = express();
const sequelize = require("./config/database.js")
const { rolesSampleRouter } = require("./routes/rolesSample.js");
const loginRouter= require("./routes/login.js")
const usersRouter = require("./routes/users.js")

const roles = require("./models/roles.js")
const users = require("./models/users.js")
const students = require("./models/students.js")
const courses = require("./models/courses.js")
const departments = require("./models/departments.js");
const scores = require("./models/scores.js")

app.use("/v1", rolesSampleRouter);
app.use("/v1", loginRouter);
app.use("/v1", usersRouter);


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



//function to insert seed data

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
//   const rolesData = [
//     {
//       role: "admin"
//     },
//     {
//       role: "staff"
//     }
//   ];
//   const usersData = [
//     {
//       email: "admin@gmail.com",
//       password: "password",
//       name:"admin" ,
//       role: 1
//     }
//   ]

//   try {
//     const department = await departments.bulkCreate(departmentData);
//     const student = await students.bulkCreate(studentData);
//     const role = await roles.bulkCreate(rolesData)
//     const user = await users.bulkCreate(usersData)
//   } catch (error) {
//     console.log(`warning, error: ${error}`);
//   }
// }

