// SBA 319: MongoDB Database Application
// Imports
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";

// Setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

// DB Connection
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}.`);
});
