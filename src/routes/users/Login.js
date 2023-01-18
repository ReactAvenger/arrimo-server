const express = require("express");
const loginUserRouter = express.Router();
const { httpLoginUser } = require("../../controllers/login.controller");

loginUserRouter.post("/", httpLoginUser);
module.exports = loginUserRouter;
