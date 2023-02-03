jest.mock("../database/queries", () => {
  const testCustomer = {
    name: "Luis",
    vip: true,
  };

  return {
    getCustomers: () => {
      return [testCustomer];
    },
    getCustomer: () => {
      return testCustomer;
    },
    createCustomer: () => {
      return testCustomer;
    },
    updateCustomer: () => {
      return testCustomer;
    },
    deleteCustomer: () => {
      return testCustomer;
    },
  };
});

const {
  customersService,
  customerService,
  createService,
  updateService,
  deleteService,
} = require("../services/customersServices");

const { testCustomer, customerId } = require("./testingUtils");

describe("Services controllers testing", () => {
  test("Customers", async () => {
    const response = await customersService();

    expect(response[0].name).toEqual("Luis");
    expect(response[0].vip).toEqual(true);
  });

  test("Customer", async () => {
    const response = await customerService();

    expect(response.name).toEqual("Luis");
    expect(response.vip).toEqual(true);
  });

  test("Create", async () => {
    const response = await createService(testCustomer);

    expect(response.name).toEqual("Luis");
    expect(response.vip).toEqual(true);
  });

  test("Update", async () => {
    const response = await updateService(customerId, testCustomer);

    expect(response.name).toEqual("Luis");
    expect(response.vip).toEqual(true);
  });

  test("Delete", async () => {
    const response = await deleteService(customerId);

    expect(response.name).toEqual("Luis");
    expect(response.vip).toEqual(true);
  });
});
