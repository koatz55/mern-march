
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
        address: {
            street: faker.address.streetAddress(true),
            country: faker.address.country(), 
            city: faker.address.city(),
            state: faker.address.state(), 
            zip: faker.address.zipCodeByState()
        }
    }
}
app.post('/api/users/new', (req, res) => {
    const newUser = createUser();
    users.push(newUser);
    console.log(newUser);
    res.json(users)
})

app.get("/api/users", (request, response) => {
    response.json(users);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany)
})

app.get('/api/user/companies/', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const both = newUser && newCompany;
    res.json(both)
})

const users = []
const company = []

let user1 = createUser();
console.log(user1)

let company1 = createCompany();
console.log(company1)




app.listen( port, () => console.log(`Listening on port: ${port} woohoo!`) );