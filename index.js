"use strict";
const express = require("express");
const app = express();
const file = require("./read-file.js");
const path = require("path");
const report =require("./generate-report.js");
const staticFilesPath = path.join(__dirname,"public");
const staticMiddleW = express.static(staticFilesPath);
app.use("/", staticMiddleW);

app.listen(3000, () => {
  console.log("web server listening on port 3000!");
});
const req = require("request-promise");
file.read("./data/monthly_crashes_full.csv").then(response=>{
  console.log(response);
}).catch(err => console.log(err));
