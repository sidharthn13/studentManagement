const express = require("express");
const app = express();
const sequelize = require("./config/database.js");
const rolesSample = require("./models/rolesSample.js")
const swaggerUi = require("swagger-ui-express");
const {rolesSampleRouter,swaggerSpec} = require("./routes/rolesSample.js");
app.use("/v1", rolesSampleRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Serve Swagger UI at /api-docs endpoint

app.listen(3000, () => {
  console.log('Server listening at port 3000');
rolesSample.sync().then((res)=>{console.log("sample roles table created")})});

