const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const potlucksRouter = require("./scheme/potlucks/potlucks-router");
const usersRouter = require("./scheme/users/users-router");
const guestsRouter = require("./scheme/guests/guests-router");
const foodsRouter = require("./scheme/food/foods-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/potlucks", potlucksRouter);
server.use("/api/users", usersRouter);
server.use("/api/guests", guestsRouter);
server.use("/api/foods", foodsRouter);

server.use((err, req, res) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
