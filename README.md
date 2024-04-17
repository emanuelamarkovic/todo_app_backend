### Project Name: todo_app_backend
**Express Todo App**

This project is a simple express application for managing tasks (todos). It provides endpoints for user operations such as login and registration as well as for the CRUD operations (Create, Read, Update, Delete) for todos.

Endpoints


**User endpoints:**
- `POST /api/user/signup`: Registers a new user. Required parameters: name, email, password.  
- `POST /api/user/login`: Authenticates a user. Required parameters: email, password.  
- `GET /api/user/`: Retrieves all users.
- 
**Todo endpoints:**
- `GET /api/todo/`: Retrieves all todos.  
- `POST /api/todo/add`: Creates a new todo. Required parameter: text.  
- `PUT /api/todo/update/:id`: Updates an existing todo. Required parameter: id.  
- `GET /api/todo/:id`: Retrieves a todo by its ID.

- `DELETE /api/todo/delete/`:id: Deletes a todo based on its ID.
- `GET /api/todo/completed`: Retrieves all completed todos.


#### Directory Structure

- `config.js`: Configuration file for environment variables.
- `db-connect.js`: Connection to the MongoDB database.
- `utils/logEndpoints.js`: Helper function for logging endpoints.
- `controller/userController.js`: Controller for user operations.
- `controller/todoController.js`: Controller for todo operations.
- `routes/userRoutes.js`: Router for user endpoints.
- `routes/todoRoutes.js`: Router for todo endpoints.
- `app.js`: Main file that starts the Express server and sets up middleware.

