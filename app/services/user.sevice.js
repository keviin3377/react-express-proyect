const faker = require('faker');
const boom = require('@hapi/boom');

class UserService{
constructor() {
this.users = [];
this.generate();
}
generate() {
    //generador de datos de usuario
const limit = 100;
for (let index = 0; index < limit; index++) {
    this.users.push({
        id:faker.random.uuid(),
        name: faker.name.firstName(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        nickname: faker.internet.userName(),
        avatar: faker.image.avatar(),
    });
}
}
async create(data) {
    const newUser={
        id:faker.random.uuid(),
        ...data
    }
    this.users.push(newUser);
    return newUser;
}
async getAll() {
    return this.users;
}
async getOne(id) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
        throw boom.notFound('User not found');
    }
    return user;
}
async getByEmail(email) {
    const user = this.users.find(user => user.email === email);
    if (!user) {
        throw boom.notFound('User not found');
    }
    return user;
}
async update(id, data) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
        throw boom.notFound('User not found');
    }
    const index = this.users.indexOf(user);
    this.users[index] = {
        ...user,
        ...data,
    };
    return this.users[index];
}
async delete(id) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
        throw boom.notFound('User not found');
    }
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return user;
}
}

module.exports = UserService;
