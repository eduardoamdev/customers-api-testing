const {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../database/queries");

const customersService = async () => {
  return await getCustomers();
};

const customerService = async (id) => {
  return await getCustomer(id);
};

const createService = async (customer) => {
  return await createCustomer(customer);
};

const updateService = async (id, info) => {
  return await updateCustomer(id, info);
};

const deleteService = async (id) => {
  return await deleteCustomer(id);
};

module.exports = {
  customersService,
  customerService,
  createService,
  updateService,
  deleteService,
};
