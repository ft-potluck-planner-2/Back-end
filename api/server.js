const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const potlucksRouter = require("./scheme/potlucks/potlucks-router");
const usersRouter = require("./scheme/users/users-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/potlucks", potlucksRouter);
server.use("/api/users", usersRouter);

// server.get("/api/users", async (req, res) => {
//   res.json(await getAllUsers());
// });

// server.post("/api/users", async (req, res) => {
//   res.status(201).json(await insertUser(req.body));
// });

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
