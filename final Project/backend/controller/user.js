import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import otpGenerator from "otp-generator";
import { upload } from "../storage/multer.js";
import jwt from "jsonwebtoken";
export async function Login(req, res) {
  const { email, password } = req.body;

  const secretOrPrivateKey = process.env.ACCESS_TOKEN_SECRET;
  const user = await User.findOne({ email: email });

  try {
    if (!user) {
      return res.status(400).json({ message: "User not registered." });
    }

    const isPasswordMatch = await bcryptjs.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, secretOrPrivateKey, { expiresIn: "1d" });

    res.json({ user: user, token: token, message: "Login Successful" });
  } catch (error) {
    console.error(error);
    return res.json("Internal server error.", error);
  }
}
export async function Register(req, res) {
  const { firstname, lastname, email, password } = req.body;
  const profilePicture = req.file;

  try {
    if (!firstname || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json(
        { message: "User already exists" }
        // Pass status as the second argument
      );
    }

    if (!profilePicture) {
      return res.status(400).json(
        { message: "No files received." } // Check the response format and structure
      );
    }
    // generate otp
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await User.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await User.findOne({ otp: otp });
    }

    const filePath = profilePicture.path;
    const imgUrl = `http://localhost:3000/${filePath}`;

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
      profilePicture: imgUrl,
      otp: otp,
      isVerified: false,
    });

    const savedUser = await newUser.save();
    return res.status(200).json({ message: "Register successful" });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return res.status(400).json({ error: "Bad Request: " + error.message });
  }
}
export async function verifyOtp(req, res) {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    user.isVerified = true;
    await user.save();
    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
