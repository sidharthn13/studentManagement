const express = require("express");
const app = express();
const sequelize = require("./config/database.js");
const { rolesSampleRouter } = require("./routes/rolesSample.js");
app.use("/v1", rolesSampleRouter);
app.listen(3000, () => {
  console.log("Server listening at port 3000");
  sequelize.sync({ force: true }).then(console.log("all tables created"));
});
