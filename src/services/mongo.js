
const mongoose = require("mongoose");
require("dotenv").config();

// get url from .env file
const MONGO_URL = process?.env?.MONGO_URL;


mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready :>> ");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongo - error :>> ", err);
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL);
}

async function mongoDisConnect() {
  mongoose.disconnect();
}







module.exports = {
  mongoConnect,
  mongoDisConnect,
};
