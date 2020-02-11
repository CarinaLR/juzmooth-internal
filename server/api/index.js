'use strict';

const router = require('express').Router();
const Product = require('../db/models/Product');
const Customer = require('../db/models/Customer');
const Order = require('../db/models/Order');

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// router.use('/Student', require('./Student'))

// router.use('/Campus', require('./Campus'))

//================CUSTOMER-ROUTERS===============================

router.get('/customers', async (req, res, next) => {
  try {
    const allCustomers = await Customer.findAll();
    res.json(allCustomers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/customers/:id', async (req, res, next) => {
  try {
    const customerById = await Customer.findById(req.params.id);
    res.json(customerById);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await Customer.create(req.body);
    if (newCustomer) {
      res.json(newCustomer.dataValue);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/customers/:id', async (req, res, next) => {
  try {
    const foundCustomer = await Customer.findById(req.params.id);
    await foundCustomer.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//===============PRODUCT-ROUTERS==================================

router.get('/products', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/products/:id', async (req, res, next) => {
  try {
    const productById = await Product.findById(req.params.id);
    res.json(productById);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/products', async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    if (newProduct) {
      res.json(newProduct.dataValue);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/products/:id', async (req, res, next) => {
  try {
    const foundProduct = await Product.findById(req.params.id);
    await foundProduct.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//===============ORDER-ROUTERS==================================

router.get('/orders', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll();
    res.json(allOrders);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/orders/:id', async (req, res, next) => {
  try {
    const orderById = await Order.findById(req.params.id);
    res.json(orderById);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/orders', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    if (newOrder) {
      res.json(newOrder.dataValue);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/orders/:id', async (req, res, next) => {
  try {
    const foundOrder = await Order.findById(req.params.id);
    await foundOrder.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
