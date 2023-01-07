const inputChecker = (input) => {
  if (!input || !input.name || !input.vip) {
    throw new Error("Input information is not correct");
  }
};

const outputChecker = (output) => {
  if (!output) {
    throw new Error("Database did not return the expected value");
  }
};

module.exports = { inputChecker, outputChecker };
