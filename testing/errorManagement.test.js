const { inputChecker, outputChecker } = require("../utils/errorManagement");

const testCustomer = {
  name: "Luis",
  vip: true,
};

describe("Error management checker", () => {
  test("Input checker", () => {
    const response = inputChecker(testCustomer);

    expect(response).toEqual(undefined);
  });

  test("Output checker", () => {
    const response = outputChecker(testCustomer);

    expect(response).toEqual(undefined);
  });
});
