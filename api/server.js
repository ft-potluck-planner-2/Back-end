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

//Tables:
//Guests-- Prime ID, user ID, potluck ID
//Items-- Prime ID, Item name, description, User ID, Potluck ID
//Potlucks-- prime ID, Date, Time, Location, Organizer ID{For guests join in model: (Guests)potluck ID && (Potluck)Prime ID}, {For items join in model: (Items)potluck ID && (Potluck)Prime ID}
//Users-- Prime ID, Username, Password
