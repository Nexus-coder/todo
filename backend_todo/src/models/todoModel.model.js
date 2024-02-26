const mongoose = require("mongoose");

// Define Todo schema
const todoSchema = new mongoose.Schema({
  //user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category',required:true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define Todo model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };