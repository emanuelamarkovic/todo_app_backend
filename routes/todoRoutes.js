import express from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  getById,
  deleteTodo,
  completedTodos,
} from "../controller/todoController.js";
import router from "./userRoutes.js";

const routerTodo = express.Router();

routerTodo.get("/", getAllTodos);
routerTodo.post("/add", createTodo);
routerTodo.put("/update/:id", updateTodo);
routerTodo.get("/:id", getById);
routerTodo.delete("/delete/:id", deleteTodo);
routerTodo.get("/completed", completedTodos);

export default routerTodo;
