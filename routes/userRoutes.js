import express from "express";
import {
  getAllUsers,
  signup,
  login,
  getUserTodo,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);
router.get("/:id/todos", getUserTodo);

export default router;
