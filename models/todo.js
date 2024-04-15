import { model, Schema } from "mongoose";

const statusValues = ["pending", "completed"];

const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, "you have to enter the title!"],
    minlength: [5, "{VALUE} must be at least 5 char!"],
  },
  status: {
    type: String,
    enum: statusValues,
    default: "pending",
  },
  category: {
    type: String,
    required: [true, "you have to enter the category!"],
  },
  dueDate: {
    type: String,
    required: [true, "you have to enter the due date!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = model("Todo", todoSchema);

export default Todo;
