const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/todos", (req, res) => {
    db.Character.findAll({}).then(characterDB => {
      res.json(dbTodo);
    });
  });

  app.post("/api/todos", (req, res) => {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(dbTodo => {
      res.json(dbTodo);
    });
  });

  app.delete("/api/todos/:id", (req, res) => {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbTodo => {
      res.json(dbTodo);
    });
  });

  app.put("/api/todos", (req, res) => {
    db.Todo.update(
      {
        text: req.body.text,
        complete: req.body.complete
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(dbTodo => {
      res.json(dbTodo);
    });
  });
};
