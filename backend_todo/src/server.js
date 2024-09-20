/**
 * Starting the app this way helps us to separate our concerns
 */

/**
 * Module dependencies.
 */
const http = require("http");

const app = require("./app");
const { mongoConnect } = require("./services/mongo");

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

async function connectToMongoDB() {
  try {
    await mongoConnect();
    
    // Start the Express server after successful MongoDB connection
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
    
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
connectToMongoDB();
