const { logger } = require("../utils/logger");

exports.getTodos = async (req, res) => {
  try {
    return res.send("deploy at digital ocean");
  } catch (e) {
    logger.info(e.message);
  }
};
