const express = require("express");
const app = express();
const rolesSample = require("./models/rolesSample.js");
const { rolesSampleRouter } = require("./routes/rolesSample.js");
app.use("/v1", rolesSampleRouter);
app.listen(3000, () => {
  console.log("Server listening at port 3000");
  rolesSample.sync().then((res) => {
    console.log("sample roles table created");
  });
});
