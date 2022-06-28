const express= require('express');
const Envioservice= require('../services/envios.service')
const validatorHandler =require('./../middlewares/validator.handler')
const{createEnvioSchema,updateEnvioSchema,getEnvioSchema}=require('./../schemas/envios.schema')

const {
  createEnvioSchema,
  updateEnvioSchema,
  getEnvioSchema
} = require('./../schemas/envios.schema');

const router = express.Router();
const service = Envioservice;

router.get('/',(req,res)=>{
  const envios = service.find()
  res.json(envios)
});

router.get('/:id',validatorHandler(getEnvioSchema),(req,res)=>{
  const envio = service.findById(req.params.id)
  res.json(envio)
});

router.post('/',validatorHandler(createEnvioSchema),(req,res)=>{
  const envio = service.create(req.body)
  res.json(envio)
});

router.put('/:id',validatorHandler(updateEnvioSchema),(req,res)=>{
  const envio = service.update(req.params.id,req.body)
  res.json(envio)
});

router.delete('/:id',(req,res)=>{
  const envio = service.delete(req.params.id)
  res.json(envio)
});

module.exports = router;