//Models
const { Todo } = require("../../models/todoModel.model");

async function getTodos(req, res) {
  try {
    const todos = await Todo.find().populate("category").sort({
      createdAt: -1,
    });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

async function postTodos(req, res) {
  let { title, description, dueDate, category } = req.body;
  dueDate = new Date(dueDate);
  try {
    const newTodo = new Todo({
      //  user: req.user.id,
      title,
      description,
      dueDate,
      category,
    });

    const todo = await newTodo.save();
    res.status(201).json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
}

async function updatedTodo(req, res) {
  const { title, description, dueDate, completed } = req.body;

  try {
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    // // Ensure user owns the todo
    // if (todo.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: "Not authorized" });
    // }

    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, completed },
      { new: true }
    );

    res.status(201).json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

async function deleteTodo(req, res) {
  try {
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    // // Ensure user owns the todo
    // if (todo.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: "Notorized" });
    // }

    await Todo.findByIdAndDelete(req.params.id);

    res.json({ msg: "Todo removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  getTodos,
  postTodos,
  updatedTodo,
  deleteTodo,
};
