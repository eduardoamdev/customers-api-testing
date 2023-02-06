jest.mock("../services/customersServices");

jest.mock("../utils/errorManagement");

const {
  customersController,
  customerController,
  lotteryController,
  createController,
  updateController,
  deleteController,
} = require("../controllers/customersControllers");

const {
  customersService,
  customerService,
  lotteryService,
  createService,
  updateService,
  deleteService,
} = require("../services/customersServices");

const {
  emptyRequest,
  controllerResponse,
  vipCustomers,
  testCustomer,
  idParam,
} = require("./testing.utils");

describe("Customer controllers info testing", () => {
  test("Customers", async () => {
    customersService.mockResolvedValue([testCustomer]);

    const response = await customersController(
      emptyRequest,
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Customers error", async () => {
    customersService.mockImplementationOnce(() => {
      throw new Error("error");
    });

    const response = await customersController(
      emptyRequest,
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Lottery", async () => {
    lotteryService.mockResolvedValue(vipCustomers);

    const response = await lotteryController(emptyRequest, controllerResponse);

    expect(response).toBeUndefined();
  });

  test("Lottery error", async () => {
    lotteryService.mockImplementationOnce(() => {
      throw new Error("error");
    });

    const response = await lotteryController(emptyRequest, controllerResponse);

    expect(response).toBeUndefined();
  });

  test("Customer", async () => {
    customerService.mockResolvedValue(testCustomer);

    const response = await customerController(
      { params: idParam },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Customer error", async () => {
    customerService.mockImplementationOnce(() => {
      throw new Error("error");
    });

    const response = await customerController(
      { params: idParam },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Create", async () => {
    createService.mockResolvedValue(testCustomer);

    const response = await createController(
      { body: testCustomer },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Create error", async () => {
    createService.mockImplementationOnce(() => {
      throw new Error("error");
    });

    const response = await createController(
      { body: testCustomer },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Update", async () => {
    updateService.mockResolvedValue(testCustomer);

    const response = await updateController(
      {
        params: idParam,
        body: testCustomer,
      },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Update error", async () => {
    updateService.mockImplementationOnce(() => {
      throw new Error("error");
    });

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
    deleteService.mockResolvedValue(testCustomer);

    const response = await deleteController(
      { params: idParam },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });

  test("Delete error", async () => {
    deleteService.mockImplementationOnce(() => {
      throw new Error("error");
    });

    const response = await deleteController(
      { params: idParam },
      controllerResponse
    );

    expect(response).toBeUndefined();
  });
});
