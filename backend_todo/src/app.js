const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");

const path = require("path");

const { body, validationResult } = require("express-validator");

const app = express();

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


// // Register a new user
// app.post('/register', [
//   // Validate input fields
//   body('username').trim().notEmpty().withMessage('Username is required'),
//   body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
// ], async (req, res) => {
//   // Check for validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     // Check if user already exists
//     let user = await User.findOne({ email: req.body.email });
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }

//     // Create a new user
//     user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     });

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(req.body.password, salt);

//     // Save the user to the database
//     await user.save();

//     // Save user information to session
//     req.session.user = {
//       id: user.id,
//       username: user.username,
//       email: user.email
//     };

//     res.status(201).json({ msg: 'User registered successfully', user: req.session.user });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // Login route
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     // Check if password matches
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     // Save user information to session
//     req.session.user = {
//       id: user.id,
//       username: user.username,
//       email: user.email
//     };

//     res.json({ msg: 'Login successful', user: req.session.user });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

//Routes
const todosRouter = require("./routes/todos/todos.routes");
const categoriesRouter = require("./routes/categories/categories.routes");
app.use("/todos", todosRouter);
app.use("/categories", categoriesRouter);
app.get("/", (req, res) => {
  res.render(path.join(__dirname, "..", "public"));
});
module.exports = app;
