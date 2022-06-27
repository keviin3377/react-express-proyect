const boom = require('@hapi/boom');
const faker = require('faker')
class CategoriesService{

  constructor(){
    this.categories = []
    this. generate
  }
  generate(){
    const limit = 10
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id:faker.datatype.uuid(),
        category: faker.commerce.department(),
      });
    }
  }
  async getAll(){
    return this.categories
  }
  async getOne(id){
    const category = this.categories.find(category => category.id === id);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category
  }
  async create(data){
    const newCategory={
      id:faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }
  async getByName(name){
    const category = this.categories.find(category => category.category === name);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category
  }
} 
module.exports = CategoriesService;