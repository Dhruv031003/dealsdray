import { app } from "./app.js";
import dotenv from "dotenv";
import dbConnect from "./db/index.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is listening on port", PORT);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error", error);
  });