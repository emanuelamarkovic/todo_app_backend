import express from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  getById,
  deleteTodo,
} from "../controller/todoController.js";

const routerTodo = express.Router();

routerTodo.get("/", getAllTodos);
routerTodo.post("/add", createTodo);
routerTodo.put("/update/:id", updateTodo);
routerTodo.get("/:id", getById);
routerTodo.delete("/delete/:id", deleteTodo);

export default routerTodo;
