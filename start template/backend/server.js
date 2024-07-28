import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
import connectToMongoDB from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;
app.use(
  cors({
    origin: "http://localhost:5173", // Change to your client's origin
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use("*", (req, res) => res.status(404).json({ error: "ops not found" }));
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
