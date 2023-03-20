const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// const [firstAnimal, secondAnimal] = animals;

// console.log(firstAnimal, secondAnimal);
// => ['horse', 'dog']
const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(otherAnimals);
// => ['fish', 'cat', 'bird']

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};



const { firstName, lastName, ...attributes } = person;


setTimeout( function() { 
    console.log("start") 
  }, 3000 );
      
  console.log("end");
  import React from 'react';
import logo from './logo.svg';
import './App.css';
    
    
function App() {
    return (
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    );
}
    
export default App;


  