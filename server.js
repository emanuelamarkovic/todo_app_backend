import "./config.js";
import express from "express";
import logEndpoints from "./utils/logEndpoints.js";
import "./db-connect.js";
import cors from "cors";
import router from "./routes/userRoutes.js";
import routerTodo from "./routes/todoRoutes.js";
import { login } from "./controller/userController.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["POST", "PUT", "GET", "DELETE", "PATCH", "OPTIONS"],
  })
);

app.use("/api/user", router);
app.use("/api/todo", routerTodo);

app.listen(port, () => {
  console.log(`Server is running on port ${port} \n`);
  logEndpoints(app, port);
});
