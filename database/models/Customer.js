const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: String,
    vip: Boolean,
  },
  {
    collection: "customers",
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
