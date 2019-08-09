const express = require("express");
const morgan = require("morgan");
const app = express();



const whitelist = [
    "http://localhost:3001"
  ]


  
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes"));
app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;