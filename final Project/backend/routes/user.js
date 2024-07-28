import express from "express";
import { Login, Register,verifyOtp } from "../controller/user.js";
import { upload } from "../storage/multer.js";
const router = express.Router();

router.post("/register", upload.single("profilePicture"), Register);
router.post("/login", Login);
router.post("/verifyOtp", verifyOtp);


export default router;
