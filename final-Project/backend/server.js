import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
import connectToMongoDB from "./db.js";
import { fileURLToPath } from "url";
import path from "path";
import userRoutese from "./routes/user.js";
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
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
app.use("/api/users", userRoutese);
app.use("*", (req, res) => res.status(404).json({ error: "ops not found" }));
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
