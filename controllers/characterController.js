const express = require("express");
const router = express.Router();

const character = require("../models/character.js");

router.get("/", (req, res) => {
  character.selectAll(data => {
    const hbsObject = {
      characters: data
    };
    res.render("userPage", hbsObject);
  });
});

router.post("/api/characters", (req, res) => {
  character.insertOne(
    ["name", "class", "race"],
    [req.body.charName, req.body.class, req.body.race],
    result => {
      res.json({ id: result.insertId });
    }
  );
});

// router.put("/api/characters/:id", (req, res) => {
//   const condition = "id = " + req.params.id;

//   character.updateOne(
//     {
//       devoured: req.body.devoured
//     },
//     condition,
//     result => {
//       if (result.changedRows === 0) {
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });

module.exports = router;
