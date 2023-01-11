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

const idParam = { id: "0" };

module.exports = { emptyRequest, controllerResponse, testCustomer, idParam };
