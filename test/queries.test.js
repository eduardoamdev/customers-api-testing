jest.mock("../database/models/Customer");

const {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../database/queries");

const Customer = require("../database/models/Customer");

const { testCustomer } = require("./testing.utils");

describe("Database queries test", () => {
  test("Get customers", async () => {
    Customer.find.mockResolvedValue([testCustomer]);

    const response = await getCustomers();

    expect(response[0].name).toEqual("Luis");
  });

  test("Get customer", async () => {
    Customer.findById.mockResolvedValue(testCustomer);

    const response = await getCustomer();

    expect(response.name).toEqual("Luis");
  });

  test("Create customer", async () => {
    Customer.create.mockResolvedValue(testCustomer);

    const response = await createCustomer();

    expect(response.name).toEqual("Luis");
  });

  test("Update customer", async () => {
    Customer.findByIdAndUpdate.mockResolvedValue(testCustomer);

    const response = await updateCustomer();

    expect(response.name).toEqual("Luis");
  });

  test("Delete customer", async () => {
    Customer.findByIdAndDelete.mockResolvedValue(testCustomer);

    const response = await deleteCustomer();

    expect(response.name).toEqual("Luis");
  });
});
