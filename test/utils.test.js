const { inputChecker, outputChecker } = require("../utils/errorManagement");

const { testCustomer } = require("./testingUtils");

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
});
