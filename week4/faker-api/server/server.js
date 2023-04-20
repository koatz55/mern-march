
const express = require("express");
const mongoose = require('mongoose');

// Insert Database name after port number   (↧ database name)
mongoose.connect('mongodb://127.0.0.1:27017/DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));


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
app.post('api/users/new', (req, res) => {
    const newUser = createUser();
    users.push(newUser);
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