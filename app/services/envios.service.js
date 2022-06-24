
const faker= require('faker');

const boom=require('@hapi/boom')





class Enviosservice{
constructor(){

  this.envios=[]
  this.generate()
}

generate(){

  const limit=  100


  for (let index = 0; index <limit; index++) {

    this.envios.push({
id:faker.datatype.uuid(),
  name: faker.name.findName(),
  lastname:faker.name.lastName(),
  phonenumber:faker.phone.phoneNumber(),
  date:faker.date.betweens(),
  productname: faker.commerce.productName(),
  codecountry:faker.address.countryCode(),
  country:faker.address.country(),
  cityname:faker.address.cityName(),
  direction:faker.address.direction(),
  secondaryaddres:faker.address.secondaryAddress(),
  price: parseInt(faker.commerce.price(),10),
  image: faker.image.imageUrl(),


isBlock: faker.datatype.boolean(),


    })

  }

}



async create(data){

const newEnvio={

  id:faker.datatype.uuid(),
  ...data
}
this.envios.push(newEnvio)
return newEnvio

}






async find(){

  return new Promise((resolve,reject)=>{

  setTimeout(() => {
  resolve(this.envios)
    }, 5000);
   })
  }

  async findone(id){
   // const name= this.getTotal()

  const envios=this.envios.find(item=>item.id===id)
  if(!envios){

   throw  boom.notFound('Envio encontrado')
  }
  if(envios.isBlock){

    throw  boom.conflict('envio bloqueado')
  }
return envios
  }




async update(id,changes){

const index= this.envios.findIndex(item=> item.id===id)

if (index=== -1){


throw boom.notFound('envio no encontrado')

}
const envios=this.envios[index]
this.envios[index]={

  ...envios,
  ...changes
}
return this.envios[index]
}


async delete(id){
  const index= this.envios.findIndex(item=> item.id===id)

  if (index=== -1){
throw boom.notFound('envio no encontrado')
  }
  this.envios.splice(index,1)
 this.envios[index]
  return {id }
}

}



module.exports=Enviosservice
