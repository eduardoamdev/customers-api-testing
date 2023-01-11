jest.mock("../services/customersServices", () => {
  return {
    customersService: () => {
      throw new Error("error");
    },
    customerService: () => {
      throw new Error("error");
    },
    createService: () => {
      throw new Error("error");
    },
    updateService: () => {
      throw new Error("error");
    },
    deleteService: () => {
      throw new Error("error");
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

const {
  emptyRequest,
  controllerResponse,
  testCustomer,
  idParam,
} = require("./testingRequestElements");

describe("Customer controllers error testing", () => {
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
