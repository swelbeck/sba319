// ./db/conn.mjs
// imports
import mongoose from "mongoose";
import dotenv from "dotenv";

// Configurations
dotenv.config();

// Database Connection
const connectionString = process.env.mongoURI;

export default async function connectDB() {
  try {
    await mongoose.connect(connectionString);
    console.log(`Mongoose Connected...`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
