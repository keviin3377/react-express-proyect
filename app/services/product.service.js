const faker = require('faker');
const boom=require('@hapi/boom');

class ProductsService{
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id:faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        description: faker.lorem.sentence(),
        categories: [faker.commerce.department()],
        image: faker.image.imageUrl(),
        isBlock:faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
const newProduct={
  id:faker.datatype.uuid(),
  ...data
}
this.products.push(newProduct);
return newProduct;
  };

  async getAll() {
    return this.products;
  }

  async getOne(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async getByName(name) {
    const product = this.products.find(product => product.name === name);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async getByCategory(category) {
    const product = this.products.find(product => product.categories.includes(category));
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async getByPrice(price) {
    const product = this.products.find(product => product.price <= price);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, data) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    const index = this.products.indexOf(product);
    this.products[index] = {
      ...product,
      ...data,
    };
    return this.products[index];
  }

  async delete(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    return product;
  }
}


module.exports = new ProductsService();
