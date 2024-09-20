/**
 * Module dependencies.
 */

const path = require("path");

const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");


const { body, validationResult } = require("express-validator");

const app = express();

//Middleware
app.use(cors());
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "..", "public")));

//Middleware
const auth = require("./middleware/auth.middleware");

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for session management
app.use(
  session({
    secret: "your-secret-key", // Change this to a secure random string
    resave: false,
    saveUninitialized: false,
  })
);

//Routes
const todosRouter = require("./routes/todos/todos.routes");

app.use("/todos", todosRouter);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "..", "public"));
});

module.exports = app;
