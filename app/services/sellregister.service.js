const faker = require('faker')
const boom = require('@hapi/boom')

class sellregister{
    constructor(){
        this.sellregister = [];
        this.generate();
    }
    generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.sellregister.push({
                id:faker.datatype.uuid(),
                name: faker.commerce.productName(),
                dni: faker.random.number().min(100000000).max(999999999),
                phone: faker.phone.phoneNumber(),
                price: parseInt(faker.commerce.price(), 10),
                iva: parseInt(faker.commerce.price(), 10),
                total: parseInt(faker.commerce.price(), 10),
                productName: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                categories: [faker.commerce.department()],
                image: faker.image.imageUrl(),
                sendDate:faker.date.past(),
                sendcode:faker.random.number().min(1000).max(9999),
                city:faker.address.city(),
//-----------------------------------------------------
                tipo_vehiculo:faker.commerce.productName(),
                marca_vehiculo:faker.commerce.productName(),
                modelo_vehiculo:faker.commerce.productName(),
                color_vehiculo:faker.commerce.productName(),
                placa_vehiculo:faker.commerce.productName(),
                anio_vehiculo:faker.commerce.productName(),
                vin_vehiculo:faker.commerce.productName(),
                motor_vehiculo:faker.commerce.productName(),
            });
        }
    }
    async create(data){
        const newSellregister={
            id:faker.datatype.uuid(),
            ...data
        }
        this.sellregister.push(newSellregister);
        return newSellregister;
    }
    async getAll(){
        return this.sellregister;
    }
    async getOne(id){
        const sellregister = this.sellregister.find(sellregister => sellregister.id === id);
        if (!sellregister) {
            throw boom.notFound('Sell register not found');
        }
        return sellregister;
    }
    async getByName(name){
        const sellregister = this.sellregister.find(sellregister => sellregister.name === name);
        if (!sellregister) {
            throw boom.notFound('Sell register not found');
        }
        return sellregister;
    }
    async getByDni(dni){
        const sellregister = this.sellregister.find(sellregister => sellregister.dni === dni);
        if (!sellregister) {
            throw boom.notFound('Sell register not found');
        }
        return sellregister;
    }
    async update(id, data){
        const sellregister = this.sellregister.find(sellregister => sellregister.id === id);
        if (!sellregister) {
            throw boom.notFound('Sell register not found');
        }
        return sellregister;
    }
    async delete(id){
        const sellregister = this.sellregister.find(sellregister => sellregister.id === id);
        if (!sellregister) {
            throw boom.notFound('Sell register not found');
        }
        return sellregister;
    }
}