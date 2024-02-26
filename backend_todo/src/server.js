const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

// const mongoURI = `mongodb://127.0.0.1:27017/Todo`;
const mongoURI = `mongodb+srv://andrew:51q0WX5Jx89ickU3@cluster0.hbs3wtk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connection.once("on", () => {
  console.log("MongoDB server coonection opened");
});

mongoose.connection.on("close", () => {
  console.log("MongoDb connection closed");
});

async function connectToMongoDB() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
    // Start the Express server after successful MongoDB connection
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
connectToMongoDB();
