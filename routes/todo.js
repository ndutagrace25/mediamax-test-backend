const express = require("express");

const router = express.Router();
const todoController = require("../controllers/todoController");

// get all todos
router.get("/", (req, res) => {
  todoController.getAllTodos((err, todos) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(todos);
    }
  });
});

// save a todo
router.post("/", (req, res) => {
  todoController.saveTodo(req.body, (err, todo) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(todo);
    }
  });
});

// update a todo
router.patch("/", (req, res) => {
  todoController.updateToDo(req.body, (err, todo) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(todo);
    }
  });
});

module.exports = router;
