const { db } = require('./server/db');
const { green, red } = require('chalk');
const Customer = require('./server/db/models/Customer');
const Product = require('./server/db/models/Product');

const customers = [
  {
    firstName: 'Patricio',
    lastName: 'Lopez',
    email: 'plopez@gmail.com',
    address: 'Las Acacias N47-56',
    description: '1 Cucumber Jugo Verde',
    productId: 1,
  },
  {
    firstName: 'Mercy',
    lastName: 'Rodriguez',
    email: 'mrodriguezz@gmail.com',
    address: 'Las Acacias N47-56',
    description: '3 Ginger Shots',
    productId: 2,
  },
  {
    firstName: 'Ivonne',
    lastName: 'Lopez',
    email: 'ilopez@gmail.com',
    address: 'Cumbaya N123-23',
    description: '2 Red Lemonade',
    productId: 3,
  },
  {
    firstName: 'Jorge',
    lastName: 'Jaramillo',
    email: 'jjaramillo@gmail.com',
    address: 'Cumbaya N123-23',
    description: '1 Turmeric Shot',
    productId: 4,
  },
];

const products = [
  {
    name: 'Cucumber Jugo Verde',
    imageUrl:
      'https://images.unsplash.com/flagged/photo-1557753478-b9fb74f39eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80',
    description:
      'El consumo habitual de este jugo ayuda a desintoxicar el organismo, al ser diuretico.',
  },
  {
    name: 'Red Lemonade',
    imageUrl:
      'https://images.unsplash.com/photo-1549127554-0cf3baf6e45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
    description:
      'El consumo habitual de esta bebida ayuda a rehidratar mientras depura el organismo.',
  },
  {
    name: 'Ginger Shot',
    imageUrl:
      'https://images.unsplash.com/photo-1567667638406-db4d5f363abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    description:
      'Depura el organismo, calma los antojos de azucar por lo que es ideal para acompanar dietas para bajar de peso.',
  },
  {
    name: 'Turmeric Shot',
    imageUrl:
      'https://images.unsplash.com/photo-1498604214351-227898deb373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80',
    description:
      'Our mission dates to 1847 when founder Townsend Harris, an early champion of public education and a pioneering diplomat who was the first U.S.”',
  },
];

const seed = async () => {
  await db.sync();
  //{force: true}

  // seed your database here!
  await Promise.all(
    products.map(product => {
      return Product.create(product);
    })
  );

  await Promise.all(
    customers.map(customer => {
      return Customer.create(customer);
    })
  );

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
