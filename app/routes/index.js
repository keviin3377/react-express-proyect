
const express=require('express');
const productsRouter = require('./products.router');
const usersRouter=require('./users.router')
const enviosRouter=require('./envios.router')
const registrosRouter = require('./registro_ventas')
const categoriesRouter = require('./categories')
const vehiculo=require('./vehiculos')

function routerApi(app) {
  const router=express.Router();
  app.use('/api/v1', router);
  router.use('/products',productsRouter);
  router.use('/users',usersRouter);
  router.use('/envios',enviosRouter)
  router.use('/registro_ventas',registrosRouter)
  router.use('/categories',categoriesRouter)
  router.use('/vehiculos',vehiculo);
  // app.use('/categories',categoriesRouter);
}
module.exports = routerApi;
