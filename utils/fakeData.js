let faker = require('faker');

let fake = function() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        skype: faker.internet.userName(),
        phone: faker.phone.phoneNumber('#########'),
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        name: faker.company.companyName(),
        postcode: faker.address.zipCode(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
    }
}

module.exports = fake;