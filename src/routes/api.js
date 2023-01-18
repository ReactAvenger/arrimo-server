const express = require("express");

const registerUserRouter = require("./users/Registration");
const loginUserRouter = require("./users/Login");
const userTokenRouter = require("./users/Token");
const meRouter = require("./users/Me");
const userRouter = require("./users/User");
const eventRouter = require("./events/Event");

const api = express.Router();

api.use("/auth/local", loginUserRouter);
api.use("/auth/local/register", registerUserRouter);
api.use("/user", userRouter);
api.use("/event", eventRouter);

api.use("/auth/token", userTokenRouter);

/**
 * Creating middleware to authenticate the API requests
 * *****************************************************  */
api.use(require("../middleware/tokenChecker"));

/******************************************************* */

api.use("/users/me", meRouter);

module.exports = api;
