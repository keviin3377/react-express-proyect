const faker = require('faker')

class registro_ventasService{

    constructor(){
        this.registro_ventas = []
        this.generate()
      }

async generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.registro_ventas.push({

        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        priceTotal: parseInt(faker.commerce.price(),10),
        priceIva: parseInt(faker.commerce.price(),10),
        cod_envio: faker.datatype.uuid(),
        fecha: parseInt(faker.setTimeout.price(),10),
        cuidad: faker.datatype.cuidad(),
        costo_vehiculo: parseInt(faker.commerce.price(),10),
        nombre_cliente: faker.commerce.productName(),
        direccion: faker.findOne.direccion(),
        telefono: faker.data.cuidad(),
        documentoIdentidad_cliente:parseInt(faker.documentoIdentidad_cliente()),
        placa_vehiculo: faker.find.data(),
        color: faker.color(),
        marca_vehiculo: faker.data.marca_vehiculo(),
        lineas_vehiculos: faker.datatype.lineas_vehiculos(),
        vin: faker.data.uuid(),
        image: faker.image.imageUrl(),
      })

    }

  }


  async create(data){
    const newregistro_ventas = {
      cod_envio: faker.datatype.uuid(),
      ...data
    }
    this.registro_ventas.push(newregistro_ventas)
    return newregistro_ventas
  }

  async find(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.registro_ventas)
      }, 5000);
    })
  }


  async findOne(id){
    return this.registro_ventas.find(item => item.id === id)
  }


  async update(id,changes){
    const index = this.registro_ventas.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('product not found')
    }
    const registro_ventas = this.registro_ventas[index]
    this.registro_ventas[index]={
      ...registro_ventas,
      ...changes
    }

    return this.registro_ventas[index]
  }


  async delete(id){
    const index = this.registro_ventas.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('product not found')
    }
    this.registro_ventas.splice(index,1)
    return {id}
  }
}
module.exports = registro_ventasService



