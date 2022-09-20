const express = require("express");
const { getTodos, addTodo } = require("../controller/todo.controller");
const router = express.Router();

router.route("/").get(getTodos).post(addTodo);

module.exports = router;
