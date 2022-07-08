const Mongoose = require("mongoose");
require("dotenv").config();
const RemoteDB = process.env.DB_STRING;

const connectDB = async () => {
  Mongoose.connect(RemoteDB).then((client) => {
    console.log("MongoDB connection successful");
  });
};

module.exports = connectDB;
