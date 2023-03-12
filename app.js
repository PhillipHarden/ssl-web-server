"use strict";

let fs = require("fs");
let http = require("http");
let path = require("path");
let url = require("url");

let express = require("express");
let request = require("request");
let bodyParser = require("body-parser");
let ejs = require("ejs");

const router = express.Router();
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

router.get("/", function (req, res) {
  res.render("index", { pagename: "Home" }); //views/index.ejs
});

router.get("/about", function (req, res) {
  res.render("about", { pagename: "About" }); //views/about.ejs
});

router.get("/contact", function (req, res) {
  res.render("contact", { pagename: "Contact" }); //views/contact.ejs
});

router.get("/pricing", function (req, res) {
  res.render("pricing", { pagename: "Pricing" }); //views/pricing.ejs
});

router.get("/faq", function (req, res) {
  res.render("faq", { pagename: "FAQ" }); //views/faq.ejs
});

router.post("/login", function (req, res) {
  // console.log(req.body.email);
  // console.log(req.body.password);
  let errors = [];
  if(req.body.email ==""){
    errors.push("Please enter email");
  }
  if(req.body.password ==""){
    errors.push("Please enter password");
  }
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
    errors.push("Email is not valid");
  }
  if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(req.body.password)){
    errors.push("Password is not valid");
  }

  res.render("index", { pagename: "Home", errors:errors });

});

app.use(express.static("public"));
app.use("/", router);
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
