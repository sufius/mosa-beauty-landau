"use strict";
var bodyParser = require("body-parser");
const path = require("path");
const {
  body
} = require("express-validator");

require("dotenv").config({
  path: '.env.local'
});

// this is used just in mode: NODE_ENV === "development"
module.exports = function(app) {
  app.use(bodyParser.json()); // to support JSON-encoded bodies
  app.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true
    })
  );
};
