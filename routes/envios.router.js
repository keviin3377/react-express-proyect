const express= require('express');
const Envioservice= require('../services/envios.service')
const validatorHandler =require('./../middlewares/validator.handler')
const{createEnvioSchema,updateEnvioSchema,getEnvioSchema}=require('./../schemas/envios.schema')

const router = express.Router()

const service= new Envioservice()
 //query param
router.get('/',async(req,res)=>{

  const envio= await service.find()

      res.json(envio);

      })


router.get('/:id',
validatorHandler(getEnvioSchema, 'params'),
async(req,res,next)=>{

  try{

    const{id}=req.params
    const envio=await service.findone(id)
    res.json(envio)

  }catch(error){
    next(error)
  }
}


)

//cierre de llamra por  id a un producto

//metodo post
router.post('/',

validatorHandler(createEnvioSchema,'body'),
async(req,res)=>{

  const body= req.body;
const newenvio= await service.create(body)
  res.status(201).json(newenvio)


  }
  )



  //cierre metodo post

  //metodo patch
router.patch('/:id',
validatorHandler(getEnvioSchema, 'params')  ,
validatorHandler(updateEnvioSchema, 'body')  ,
async(req,res,next)=>{

  try {
    const{id}=req.params
    const body= req.body;
  const envio= await service.update(id,body)
    res.json(envio)

  }catch(error){
  next(error)
  }
   }
  )
  //cierre de metodo path

  // metodo delete

  router.delete('/:id',async(req,res)=>{
    const{id}=req.params
    const rta= await service.delete(id)


      res.json(rta)

      })
  //cierre metodo delete
module.exports = router
