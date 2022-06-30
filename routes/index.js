const express= require('express');

const enviosRouter=require('./envios.router')
const productosRouter=require('./productos.router')

function routerApi(app){

// mejora de rutas de endpoints

const router= express.Router();
app.use('/api/v1', router)

router.use('/envios',enviosRouter)
router.use('/productos',productosRouter)



}
module.exports=routerApi
