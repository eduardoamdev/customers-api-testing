const { databaseConnection } = require("../database/connection");
const Customer = require("../database/models/Customer");

databaseConnection();

const customers = [
  {
    name: "Jose Luis Martínez López",
    vip: false,
  },
  {
    name: "Alberto Díaz Pérez",
    vip: false,
  },
  {
    name: "Marta Álamo Ruíz",
    vip: true,
  },
  {
    name: "Alejandro Escudero Ruíz",
    vip: false,
  },
  {
    name: "María Martín Tomás",
    vip: true,
  },
  {
    name: "Alfredo Soriano Benedí",
    vip: false,
  },
  {
    name: "Javier Fernández Casas",
    vip: false,
  },
  {
    name: "Antonio López Ruíz",
    vip: false,
  },
  {
    name: "Tomás Martínez Alcaraz",
    vip: true,
  },
  {
    name: "Leandro Galán Más",
    vip: false,
  },
];

const seedsExec = async () => {
  const deletedCustomers = await Customer.deleteMany();

  console.log(`${deletedCustomers.deletedCount} customers have been deleted`);

  const createdCustomers = await Customer.create(customers);

  console.log(`The following customers have been created: ${createdCustomers}`);

  process.exit(0);
};

seedsExec();
