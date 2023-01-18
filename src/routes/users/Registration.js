const express = require("express");
const registerUserRouter = express.Router();
const { httpRegisterUser } = require("../../controllers/registration.controller");

registerUserRouter.post("/", httpRegisterUser);

module.exports = registerUserRouter;
