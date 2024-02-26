const express = require("express");
const todosRouter = express.Router();

const {
  getTodos,
  postTodos,
  updatedTodo,
  deleteTodo,
} = require("./todos.controllers");

// Get all todos for a specific user
todosRouter.get("/", getTodos);

// Create a new todo
todosRouter.post("/", postTodos);

// Update a todo
todosRouter.put("/:id", updatedTodo);

// Delete a todo
todosRouter.delete("/:id", deleteTodo);

module.exports = todosRouter;
