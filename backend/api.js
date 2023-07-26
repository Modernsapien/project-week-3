const express = require("express");
const cors = require("cors");
const logger = require("morgan")

const userRoutes = require("./routers/userRoutes");

const tokenRoutes = require("./routers/tokenRoutes");

const eventRoutes = require("./routers/eventRoutes");

const todoRoutes = require("./routers/todoRoutes");

const api = express();

api.use(cors());
api.use(express.json());
api.use(logger('dev'))

api.use("/user", userRoutes);

api.use("/token", tokenRoutes);

api.use("/event", eventRoutes);

api.use("/todos", todoRoutes);

api.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

module.exports = api;
