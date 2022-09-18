require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const { logger } = require("./utils/logger");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use("/", require("./router/todo.router"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`server start at ${port}`);
});
