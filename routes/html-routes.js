// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
// const character = require("../models/character");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
let hbsObject={}

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("createCharacter");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the character create page
    if (req.user) {
      res.render("createCharacter");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/createCharacter", isAuthenticated, (req, res) => {
    res.render("createCharacter");
  });

  app.get("/index", isAuthenticated, (req, res) => {
    // get character info from database
    db.Character.findAll().then(data => {
      const charObj = {
        characters: data
      };
      hbsObject = { ...charObj };
      $.ajax({
        url: "https://www.dnd5eapi.co/api/spells",
        method: "GET"
      }).then(spellRes => {
        const spellObj = {
          spells: spellRes.results
        };
        hbsObject = { ...hbsObject, ...spellObj}

        $.ajax({
          url: "https://www.dnd5eapi.co/api/monsters",
          method: "GET"
      }).then(monsterRes => {
          const monsterObj = {
            monsters: monsterRes.results
          };
          hbsObject = { ...hbsObject, ...monsterObj}

          $.ajax({
            url: "https://www.dnd5eapi.co/api/equipment",
            method: "GET"
        }).then(equipRes => {
            const equipObj = {
              equipment: equipRes.results
            };
            hbsObject = { ...hbsObject, ...equipObj}

            console.log(hbsObject)
            res.render("index", hbsObject)
        })
        });
      });
    });
  });
};
