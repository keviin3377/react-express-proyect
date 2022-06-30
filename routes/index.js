const express= require('express');

const enviosRouter=require('./envios.router')
const productosRouter=require('./productos.router')

function routerApi(app){

const router= express.Router();
app.use('/api/v1', router)
//cors funcion para que se puedan hacer peticiones desde cualquier lugar
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.use('/envios',enviosRouter)
router.use('/productos',productosRouter)
}

module.exports=routerApi;
