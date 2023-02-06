const emptyRequest = {};

const controllerResponse = {
  status: (responseStatus) => {
    return {
      json: (jsonResponse) => {
        return { status: responseStatus, jsonResponse };
      },
    };
  },
};

const testCustomer = {
  name: "Luis",
  vip: true,
};

const vipCustomers = [
  {
    name: "Luis",
    vip: true,
  },
  {
    name: "Javier",
    vip: true,
  },
  {
    name: "Marta",
    vip: true,
  },
];

const idParam = { id: "0" };

module.exports = {
  emptyRequest,
  vipCustomers,
  controllerResponse,
  testCustomer,
  idParam,
};
