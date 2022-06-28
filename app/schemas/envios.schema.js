const joi=require('joi')

const id= joi.string().uuid()
const name=joi.string().min(3).max(15)
const lastname=joi.string().min(3).max(15)
const phonenumber=joi.string().max(15)
const date=joi.string().min(3).max(15)
const productname=joi.string().min(3).max(15)
const codecountry=joi.string().min(3).max(8)
const country=joi.string().min(4).max(30)
const cityname=joi.string().min(4).max(30)
const direction=joi.string().min(4).max(30)
const secondaryaddres=joi.string().min(4).max(30)
const price=joi.number().integer().min(10)

const createEnvioSchema=joi.object({

     
     name:name.require(),
     lastname:lastname.require(),
     phonenumber:phonenumber.require(),
     date:date.require(),
     productname:productname.require(),
     codecountry:codecountry.require(),
     country:country.require(),
     cityname:cityname.require(),
     direction:direction.require(),
     secondaryaddres:secondaryaddres.require(),
     price:price.require()


})

const updateEnvioSchema=joi.object({


     name:name,
     lastname:lastname,
     phonenumber:phonenumber,
     date:date,
     productname:productname,
     codecountry:codecountry,
     country:country,
     cityname:cityname,
     direction:direction,
     secondaryaddres:secondaryaddres,
     price:price


  })

  const getEnvioSchema=joi.object({

    id: id.required(),

    })

    module.exports={createEnvioSchema,updateEnvioSchema,getEnvioSchema}

