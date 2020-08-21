const db = require("../models");

module.exports = function(app) {
  app.post("/api/characters", (req, res) => {
    // eslint-disable-next-line prettier/prettier
    const { name, race, str, dex, con, int, wis, cha, level, xp, hp, alignment } = req.body;
    db.Character.create({
      name,
      class: req.body.class,
      race,
      str,
      dex,
      con,
      int,
      wis,
      cha,
      hp,
      xp,
      level,
      alignment
    }).then(dbCharacter => {
      res.json(dbCharacter);
    });
  });

  app.delete("/api/characters/:id", (req, res) => {
    db.Character.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbCharacter => {
      res.json(dbCharacter);
    });
  });

  app.get("/api/characters/:id", (req, res) => {
    db.Character.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbCharacter => {
      res.json(dbCharacter);
    });
  });

  app.get("/api/characters/", (req, res) => {
    db.Character.findAll().then(dbCharacter => {
      res.json(dbCharacter);
    });
  });
};
