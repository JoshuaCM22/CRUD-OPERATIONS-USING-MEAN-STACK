require("./databaseConnection");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let employeeRoutes = require("./controllers/EmployeeController");
let app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:4200", 
    headers: "*",
    methods: "*"
  })
);

app.listen(4000, () => {
  console.log("Server started at : 4000");
  console.log("Link: http://localhost:4000/CRUD_OPERATIONS_USING_MEAN_STACK_DB");
});

app.use("/CRUD_OPERATIONS_USING_MEAN_STACK_DB", employeeRoutes);

