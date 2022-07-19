import mongoose from "mongoose";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist!" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "The password is incorrect!" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser.id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
};

export const signUp = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "The user already exists!" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      username,
    });
    const token = await jwt.sign(
      { email: result.email, id: result.id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.error(error.response.data);
  }
};
