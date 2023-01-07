const {
  customersService,
  customerService,
  createService,
  updateService,
  deleteService,
} = require("../services/customersServices");

const { inputChecker, outputChecker } = require("../utils/errorManagement");

const customersController = async (req, res) => {
  try {
    const response = await customersService();

    outputChecker(response);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ severity: "ERROR", message: error.message });
  }
};

const customerController = async (req, res) => {
  try {
    const response = await customerService(req.params.id);

    outputChecker(response);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ severity: "ERROR", message: error.message });
  }
};

const createController = async (req, res) => {
  try {
    inputChecker(req.body);

    const response = await createService(req.body);

    outputChecker(response);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ severity: "ERROR", message: error.message });
  }
};

const updateController = async (req, res) => {
  try {
    inputChecker(req.body);

    const response = await updateService(req.params.id, req.body);

    outputChecker(response);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ severity: "ERROR", message: error.message });
  }
};

const deleteController = async (req, res) => {
  try {
    res.status(200).json(await deleteService(req.params.id));
  } catch (error) {
    res.status(500).json({ severity: "ERROR", message: error.message });
  }
};

module.exports = {
  customersController,
  customerController,
  createController,
  updateController,
  deleteController,
};
