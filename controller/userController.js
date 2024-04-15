import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("email:", email);
  try {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const newUser = {
      name,
      email,
      password: hashedPassword,
      todos: [],
    };
    const userExists = await User.findOne({ name });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    await User.create(newUser);
    delete newUser.password;
    res.status(200).json({
      message: "New User added! 🐒",
      newUser,
    });
  } catch (error) {
    console.error("Error signing up:", error);
    res
      .status(500)
      .json({ message: "Error signing up. Please try again later." });
  }
};

const login = async (req, res) => {
  console.log("req.body:", req.body);
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res
        .status(404)
        .json({ message: "user email or password are falase!" });
    }
    const passwordsMatched = await bcrypt.compare(password, foundUser.password);
    if (!passwordsMatched) {
      return res
        .status(401)
        .json({ message: "user email or password are falase!" });
    }
    const user = foundUser.toObject();
    delete user.password;
    const payload = { userID: user._id };
    const token = jwt.sign(payload, process.env.SECRETKEY, {
      expiresIn: "1h",
    });
    console.log("token", token);
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "login successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserTodo = async (req, res) => {
  try {
    const user = req.user;
    const userWithTodos = await User.findById(user.userID).populate("todos");
    res.status(200).json(userWithTodos.todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllUsers, signup, login, getUserTodo };
