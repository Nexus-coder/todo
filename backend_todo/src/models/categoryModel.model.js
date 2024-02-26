const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  colour: { type: String },
  // You can add more fields here as needed
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
