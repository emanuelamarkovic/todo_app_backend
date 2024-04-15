import Todo from "../models/todo.js";

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createTodo = async (req, res) => {
  console.log(req.body);
  try {
    const { title, status, category, dueDate } = req.body;
    const newTodo = { title, status, category, dueDate };
    await Todo.create(newTodo);
    res.json({ message: "New todo added", newTodo });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const newTodoData = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, newTodoData, {
      new: true,
    });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found!" });
    }
    res.json({ message: "Todo updated", updatedTodo });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found!" });
    }
    res.json(todo);
  } catch (error) {
    console.error("Error getting todo by id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const completedTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ status: "completed" });
    res.json(todos);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found!" });
    }
    res.json({ message: "Todo deleted", deletedTodo });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  getAllTodos,
  createTodo,
  updateTodo,
  getById,
  deleteTodo,
  completedTodos,
};
