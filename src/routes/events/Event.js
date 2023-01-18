const express = require("express");
const eventRouter = express.Router();

const {
  httpAddEvent,
  httpDeleteEvent,
  httpGetEvents,
  httpUpdateEvents,
} = require("../../controllers/event.controller");

eventRouter.get("/", httpGetEvents);

eventRouter.post("/", httpAddEvent);

eventRouter.put("/", httpUpdateEvents);

eventRouter.delete("/", httpDeleteEvent);


module.exports = eventRouter;
