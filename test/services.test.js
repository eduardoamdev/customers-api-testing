jest.mock("../database/queries");

const {
  customersService,
  customerService,
  createService,
  updateService,
  deleteService,
} = require("../services/customersServices");

const {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../database/queries");

const { testCustomer, customerId } = require("./testing.utils");

describe("Services controllers testing", () => {
  test("Customers", async () => {
    getCustomers.mockResolvedValue([testCustomer]);

    const response = await customersService();

    expect(response[0].name).toEqual("Luis");
    expect(response[0].vip).toEqual(true);
  });

  test("Customer", async () => {
    getCustomer.mockResolvedValue(testCustomer);

    const response = await customerService();

    expect(response.name).toEqual("Luis");
    expect(response.vip).toEqual(true);
  });

  test("Create", async () => {
    createCustomer.mockResolvedValue(testCustomer);

    const response = await createService(testCustomer);

    expect(response.name).toEqual("Luis");
    expect(response.vip).toEqual(true);
  });

  test("Update", async () => {
    updateCustomer.mockResolvedValue(testCustomer);

    const response = await updateService(customerId, testCustomer);

    expect(response.name).toEqual("Luis");
    expect(response.vip).toEqual(true);
  });

  test("Delete", async () => {
    deleteCustomer.mockResolvedValue(testCustomer);

    const response = await deleteService(customerId);

    expect(response.name).toEqual("Luis");
    expect(response.vip).toEqual(true);
  });
});
