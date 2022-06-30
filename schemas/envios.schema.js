const joi=require('joi')

const id= joi.string().uuid()
const name=joi.string().min(3).max(60)
const lastname=joi.string().min(3).max(60)
const phonenumber=joi.string().max(15)
const date=joi.string().min(1).max(40)
const productname=joi.string().min(3).max(80)
const codecountry=joi.string().min(1).max(20)
const country=joi.string().min(1).max(30)
const cityname=joi.string().min(1).max(30)
const direction=joi.string().min(1).max(30)
const secondaryaddres=joi.string().min(4).max(30)
const price=joi.number().integer().min(10)

const createEnvioSchema=joi.object({

     
     name:name.required(),
     lastname:lastname.required(),
     phonenumber:phonenumber.required(),
     date:date.required(),
     productname:productname.required(),
     codecountry:codecountry.required(),
     country:country.required(),
     cityname:cityname.required(),
     direction:direction.required(),
     secondaryaddres:secondaryaddres.required(),
     price:price.required()


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

