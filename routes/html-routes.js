// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const character = require("../models/character");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("createCharacter");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/createCharacter", isAuthenticated, (req, res) => {
    res.render("createCharacter");
  });
<<<<<<< HEAD

  app.get("/index", isAuthenticated, (req, res) => {
    db.Character.findAll().then(data => {
      // console.log(data);
      const hbsObject = {
        characters: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
};
