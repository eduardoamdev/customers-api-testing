const { inputChecker, outputChecker } = require("../utils/errorManagement");
const { chooseCustomer } = require("../utils/chooseCustomer");

const { testCustomer, vipCustomers } = require("./testing.utils");

describe("Error management checker", () => {
  test("Input checker ok", () => {
    const response = inputChecker(testCustomer);

    expect(response).toBeUndefined();
  });

  test("Input checker error", () => {
    expect(() => {
      inputChecker();
    }).toThrow(Error);
  });

  test("Output checker ok", () => {
    const response = outputChecker(testCustomer);

    expect(response).toBeUndefined();
  });

  test("Output checker error", () => {
    expect(() => {
      outputChecker();
    }).toThrow(Error);
  });

  test("Choose customer", () => {
    const response = chooseCustomer(vipCustomers);

    expect(typeof response).toEqual("number");
  });
});
