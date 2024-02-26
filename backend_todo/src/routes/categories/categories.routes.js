const express = require("express");
const categoriesRouter = express.Router();
const Category = require("../../models/categoryModel.model");

// Get all categories
categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get a single category by ID
categoriesRouter.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Update a category by ID
categoriesRouter.put("/:id", async (req, res) => {
  const { name } = req.body;

  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    // Update the category name
    category.name = name;

    // Save the updated category to the database
    await category.save();

    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Create a new category
categoriesRouter.post("/", async (req, res) => {
  const { name, colour } = req.body;

  try {
    // Check if the category already exists
    let category = await Category.findOne({ name });

    if (category) {
      return res.status(400).json({ msg: "Category already exists" });
    }

    // Create a new category
    category = new Category({ name, colour });

    // Save the category to the database
    await category.save();

    res.status(201).json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete a category by ID
categoriesRouter.delete("/:id", async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    Category.findByIdAndDelete(req.params.id);
    res.json({ msg: "Category removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = categoriesRouter;
