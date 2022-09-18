const winston = require("winston");

exports.getTodos = async (req, res) => {
  try {
    return res.send("deploy at digital ocean");
  } catch (e) {
    winston.info(e.message);
  }
};
