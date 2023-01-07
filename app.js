const express = require("express");
const { databaseConnection } = require("./database/connection");
const customerRoutes = require("./routes/customers");

const app = express();

const port = 9000;

databaseConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", customerRoutes);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
