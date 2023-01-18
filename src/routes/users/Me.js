const express = require("express");
const meRouter = express.Router();
const { httpMeUser } = require("../../controllers/me.controller");


meRouter.post("/", httpMeUser);
module.exports = meRouter;