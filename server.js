require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const winston = require("winston");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("deploy at digital ocean");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  winston.info(`server start at ${port}`);
});
