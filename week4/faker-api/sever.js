
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
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(8, true)
    }
}

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: [faker.address.streetAddress(true),
            faker.address.country(), faker.address.city(),
            faker.address.state(), faker.address.zipCodeByState()]
    }
}
app.post('api/users/new', (req, res) => {
    const newUser = createUser();
    users.push(req.body);
    console.log(req.body);
    res.json(users)
})

app.get('api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany)
})

const users = []

let user1 = createUser();
console.log(user1)

let company1 = createCompany();
console.log(company1)




app.listen( port, () => console.log(`Listening on port: ${port} woohoo!`) );