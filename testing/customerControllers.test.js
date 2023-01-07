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

const successfulResponse = {
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
      successfulResponse
    );

    expect(response).toEqual(undefined);
  });

  test("Customer", async () => {
    const response = await customerController(
      { params: idParam },
      successfulResponse
    );

    expect(response).toEqual(undefined);
  });

  test("Create", async () => {
    const response = await createController(
      { body: testCustomer },
      successfulResponse
    );

    expect(response).toEqual(undefined);
  });

  test("Update", async () => {
    const response = await updateController(
      {
        params: idParam,
        body: testCustomer,
      },
      successfulResponse
    );

    expect(response).toEqual(undefined);
  });

  test("Delete", async () => {
    const response = await deleteController(
      { params: idParam },
      successfulResponse
    );

    expect(response).toEqual(undefined);
  });
});
