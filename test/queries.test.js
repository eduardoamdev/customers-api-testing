jest.mock("../database/models/Customer");

const {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../database/queries");

describe("Database queries test", () => {
  test("Get customers", async () => {
    const response = await getCustomers();

    expect(response).toEqual(undefined);
  });

  test("Get customer", async () => {
    const response = await getCustomer();

    expect(response).toEqual(undefined);
  });

  test("Create customer", async () => {
    const response = await createCustomer();

    expect(response).toEqual(undefined);
  });

  test("Update customer", async () => {
    const response = await updateCustomer();

    expect(response).toEqual(undefined);
  });

  test("Delete customer", async () => {
    const response = await deleteCustomer();

    expect(response).toEqual(undefined);
  });
});
