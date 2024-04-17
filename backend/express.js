const express = require("express");
const bodyParser = require("body-parser");
const routeHome = require("./router/home");
const routeError = require("./router/error");

const app = express();
const cors = require("cors");

const session = require("express-session");
const MySQLStore = require("./const/const");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/", routeHome);
app.use(routeError);

module.exports=app;
