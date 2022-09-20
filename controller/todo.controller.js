const pool = require("../config/db");
const { selectTodos, insertTodo } = require("../query");
const { logger } = require("../utils/logger");

exports.getTodos = async (req, res) => {
  try {
    const result = await pool.query(selectTodos);
    res.json({ data: result.rows, count: result.rowCount });
  } catch (e) {
    logger.info(e.message);
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = await pool.query(insertTodo, [title, description]);
    res.send(data);
  } catch (e) {
    logger.info(e.message);
  }
};
