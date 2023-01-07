const Customer = require("./models/Customer");

const getCustomers = async () => {
  return await Customer.find();
};

const getCustomer = async (id) => {
  return await Customer.findById(id);
};

const createCustomer = async (customer) => {
  return await Customer.create(customer);
};

const updateCustomer = async (id, info) => {
  return await Customer.findByIdAndUpdate(id, info, { new: true });
};

const deleteCustomer = async (id) => {
  console.log(id);
  return await Customer.findByIdAndDelete(id);
};

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
