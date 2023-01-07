const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const databaseConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/customers")
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(`Database connection error: ${error}`);
    });
};

module.exports = { databaseConnection };
