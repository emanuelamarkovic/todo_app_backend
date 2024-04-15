import express from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  getById,
  deleteTodo,
  completedTodos,
} from "../controller/todoController.js";

const routerTodo = express.Router();

routerTodo.get("/", getAllTodos);
routerTodo.post("/add", createTodo);
routerTodo.put("/update/:id", updateTodo);
routerTodo.get("/:id/todos", getById);
routerTodo.delete("/delete/:id", deleteTodo);
routerTodo.patch("/completed", completedTodos);

export default routerTodo;
