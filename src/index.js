const express = require("express");
const app = express();
const sequelize = require("./config/database.js");
const rolesSample = require("./models/rolesSample.js")


const {rolesSampleRouter} = require("./routes/rolesSample.js");

//setting up swagger docs
const swaggerUi = require("swagger-ui-express");
const swaggerJSDocs = require("swagger-jsdoc");
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student Management API Documentation ",
      version: "1.0.0",
      description: "Manage student and department records using postgresql",
    },
    servers: [
      {
        url: `http://localhost:3000/v1`,
      },
    ],
  },
  apis: ["./routes/rolesSample.js"], // specify the path to API routes files
};
const swaggerSpec = swaggerJSDocs(swaggerOptions);


app.use("/v1", rolesSampleRouter);
app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Serve Swagger UI at /api-docs endpoint

app.listen(3000, () => {
  console.log('Server listening at port 3000');
rolesSample.sync().then((res)=>{console.log("sample roles table created")})});

