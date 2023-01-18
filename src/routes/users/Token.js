const express = require("express");
const renewTokenRouter = express.Router();
const { httpRenewToken } = require("../../controllers/token.controller");


renewTokenRouter.post("/", httpRenewToken);

module.exports = renewTokenRouter;