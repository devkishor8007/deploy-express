const insertTodo =
  "INSERT INTO todos(title, description) values($1, $2) RETURNING *";
const selectTodos = "SELECT * FROM todos";

module.exports = { insertTodo, selectTodos };
