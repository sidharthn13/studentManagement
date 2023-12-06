const express = require("express");
const app = express();
const sequelize = require("./config/database.js");

// Uncomment this block if you want to check the database connection
// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

const rolesSampleRouter = require("./routes/rolesSample.js");
app.use("/v1", rolesSampleRouter);
app.listen(3000, () => console.log('Server listening at port 3000'));

