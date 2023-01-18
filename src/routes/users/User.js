const express = require("express");
const userRouter = express.Router();
const {
  httpUsers,
  httpDeleteUser,
  httpUpdateUser,
} = require("../../controllers/user.controller");

userRouter.get("/", httpUsers);

userRouter.delete("/:user", httpDeleteUser);

userRouter.put("/", httpUpdateUser);

module.exports = userRouter;
