const {
  getCustomers,
  getCustomer,
  getVipCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../database/queries");

const { chooseCustomer } = require("../utils/chooseCustomer");

const customersService = async () => {
  return await getCustomers();
};

const customerService = async (id) => {
  return await getCustomer(id);
};

const lotteryService = async () => {
  const vipCustomers = await getVipCustomers();

  const chosenCustomer = chooseCustomer(vipCustomers);

  return vipCustomers[chosenCustomer];
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
  lotteryService,
  createService,
  updateService,
  deleteService,
};
