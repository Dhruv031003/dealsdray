import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(() => {
      console.log("Database connected!!!");
    });
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default dbConnect;
