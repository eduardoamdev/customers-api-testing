jest.mock("../services/customersServices", () => {
  const testCustomer = {
    name: "Luis",
    vip: true,
  };

  return {
    customersService: () => {
      return [testCustomer];
    },
    customerService: () => {
      return testCustomer;
    },
    createService: () => {
      return testCustomer;
    },
    updateService: () => {
      return testCustomer;
    },
    deleteService: () => {
      return testCustomer;
    },
  };
});

jest.mock("../utils/errorManagement");

const {
  customersController,
  customerController,
  createController,
  updateController,
  deleteController,
} = require("../controllers/customersControllers");

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

describe("Customer controllers testing", () => {
  test("Customers", async () => {
    const response = await customersController(
      emptyRequest,
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Customer", async () => {
    const response = await customerController(
      { params: idParam },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Create", async () => {
    const response = await createController(
      { body: testCustomer },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Update", async () => {
    const response = await updateController(
      {
        params: idParam,
        body: testCustomer,
      },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Delete", async () => {
    const response = await deleteController(
      { params: idParam },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });
});
