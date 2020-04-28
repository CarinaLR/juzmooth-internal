const { db } = require("./server/db");
const { green, red } = require("chalk");
const Customer = require("./server/db/models/Customer");
const Product = require("./server/db/models/Product");
const Order = require("./server/db/models/Order");

//In our tables, the customerId is a column in the order table. The association of a foreign id in a table is a belongsTo relationship. "table belongs to a column".

const customers = [
  {
    firstName: "Patricio",
    lastName: "Lopez",
    email: "plopez@gmail.com",
    address: "Las Acacias N47-56",
    description: "1 Cucumber Jugo Verde",
  },
  {
    firstName: "Mercy",
    lastName: "Rodriguez",
    email: "mrodriguezz@gmail.com",
    address: "Las Acacias N47-56",
    description: "3 Ginger Shots",
  },
  {
    firstName: "Ivonne",
    lastName: "Lopez",
    email: "ilopez@gmail.com",
    address: "Cumbaya N123-23",
    description: "2 Red Lemonade",
  },
  {
    firstName: "Jorge",
    lastName: "Jaramillo",
    email: "jjaramillo@gmail.com",
    address: "Cumbaya N123-23",
    description: "1 Turmeric Shot",
  },
];

const orders = [
  {
    firstName: "Patricio",
    lastName: "Lopez",
    active: true,
    description: "1 Cucumber Jugo Verde",
    customerId: 3,
    orderDate: 2020 - 1 - 25,
    status: "en proceso",
  },
  {
    firstName: "Mercy",
    lastName: "Rodriguez",
    active: true,
    description: "3 Ginger Shots",
    customerId: 2,
    orderDate: 2020 - 1 - 25,
    status: "en proceso",
  },
  {
    firstName: "Ivonne",
    lastName: "Lopez",
    active: true,
    description: "2 Red Lemonade",
    customerId: 4,
    orderDate: 2020 - 1 - 27,
    status: "entregado",
  },
  {
    firstName: "Jorge",
    lastName: "Jaramillo",
    active: false,
    description: "1 Turmeric Shot",
    customerId: 1,
    orderDate: 2020 - 1 - 29,
    status: "en ruta",
  },
];

// const orderRows = orders[0];

const products = [
  {
    name: "Cucumber Jugo Verde",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1557753478-b9fb74f39eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80",
    description:
      "El consumo habitual de este jugo ayuda a desintoxicar el organismo, al ser diuretico.",
  },
  {
    name: "Red Lemonade",
    imageUrl:
      "https://images.unsplash.com/photo-1487536988267-23b03fdfc3c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    description:
      "El consumo habitual de esta bebida ayuda a rehidratar mientras depura el organismo.",
  },
  {
    name: "Ginger-Turmeric Shot",
    imageUrl:
      "https://images.unsplash.com/photo-1567667638406-db4d5f363abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    description:
      "Depura el organismo, calma los antojos de azucar por lo que es ideal para acompanar dietas para bajar de peso.",
  },
  {
    name: "Chai Tea",
    imageUrl:
      "https://images.unsplash.com/photo-1578741243467-2d4a41b697de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    description:
      "Depura el organismo, calma los antojos de azucar por lo que es ideal para acompanar dietas para bajar de peso.",
  },
];

const seed = async () => {
  await db.sync();
  //{force: true}

  // seed your database here!
  await Promise.all(
    products.map((product) => {
      return Product.create(product);
    })
  );

  await Promise.all(
    customers.map((customer) => {
      return Customer.create(customer);
    })
  );

  await Promise.all(
    orders.map((order) => {
      return Order.create(order);
    })
  );

  console.log(green("Seeding success!"));
  db.close();
};

seed().catch((err) => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});

// "start": "echo 'Running server for production - developers, use npm run start:dev for development' && node main"
