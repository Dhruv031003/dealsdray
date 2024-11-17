import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnect";

const app = express();

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

try {
  dbConnect().then(() => {
    app.listen(PORT, () => {
      console.log("Server is listening on port", PORT);
    });
  });
} catch (error) {
    console.log(error)
    
}
