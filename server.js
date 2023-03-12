"use strict";

let fs = require("fs");
let http = require("http");
let path = require("path");
let url = require("url");

let express = require("express");
let request = require("request");
let bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sudo npm install -g express
// sudo npm install -g ejs
// sudo npm install -g request
// sudo npm install -g body-parser

let ejs = require("ejs");
const router = express.Router();
let app = express();
app.set("view engine", "ejs");
app.engine("ejs", require("ejs")._express);

router.get("/", function (req, res) {
  res.render("index", { pagename: "Home" }); //views/index.ejs
});

router.get("/about", function (req, res) {
  res.render("index", { pagename: "About" }); //views/about.ejs
});

app.use(express.static("public"));
app._router("/", router);
let server = app.listen("8080");

// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
