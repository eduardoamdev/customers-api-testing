const express = require("express");
const router = express.Router();
const {
  customersController,
  customerController,
  createController,
  updateController,
  deleteController,
} = require("../controllers/customersControllers");

router.get("/", customersController);

router.get("/:id", customerController);

router.post("/create", createController);

router.put("/update/:id", updateController);

router.delete("/delete/:id", deleteController);

module.exports = router;
