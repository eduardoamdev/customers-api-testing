const chooseCustomer = (vipCustomers) => {
  return Math.floor(Math.random() * vipCustomers.length);
};

module.exports = { chooseCustomer };
