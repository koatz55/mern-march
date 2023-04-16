
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// ! make sure these lines are above any app.get and app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(faker.name.firstName());


const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(8, true)
    }
}

const createCompany = () => {
    return {
        name: faker.company.name(),
        address: [faker.address.streetAddress(true),
            faker.address.country(), faker.address.city(),
            faker.address.state(), faker.address.zipCodeByState()]
    }
}
app.get('/user', (req, res) => {
    const newUser = createUser();
    res.json(newUser)
})

let user1 = createUser();
console.log(user1)





app.listen( port, () => console.log(`Listening on port: ${port} woohoo!`) );