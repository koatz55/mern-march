import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const[pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    axios.get('http://pokeapi.co/api/v2/pokemon')
      .then((response) =>{
        console.log('RESPONSE: ' + JSON.stringify(response));
        setPokemon(response.data.results);
      })
      .catch((err) =>{
        console.log(err);
      })
  },[]);
  return (
    <div className="App">
      <h1>pokemon api with axios!</h1>
      {
        pokemon.map((mon, idx) => (
          <div key= {idx}>
            <h2 className='Pokemon'><span className='Tag'>Kanto {idx +1}</span> {mon.name}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
