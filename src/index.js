const express = require("express");
const app = express();
const users = require("./models/users.js")
const roles = require("./models/roles.js")
const scores = require("./models/scores.js")
const students = require("./models/students.js")
const departments = require("./models/departments.js")
const courses = require("./models/courses.js")
const { rolesSampleRouter } = require("./routes/rolesSample.js");
app.use("/v1", rolesSampleRouter);
app.listen(3000, () => {
  console.log('Server listening at port 3000');
  roles.sync({force:true}).then(console.log("roles table created"))
  users.sync({force:true}).then(console.log("users table created"))
  scores.sync({force:true}).then(console.log("scores table created"))
  students.sync({force:true}).then(console.log("students table created"))
  departments.sync({force:true}).then(console.log("departments table created"))
  courses.sync({force:true}).then(console.log("courses table created"))
});


