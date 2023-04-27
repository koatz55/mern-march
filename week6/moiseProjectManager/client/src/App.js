import './App.css';
// import ProductForm from './components/ProductForm';
import { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../views/Main';
import Detail from '../views/Detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route element={<Main/>} path="/home" default />
            <Route element={<Detail/>} path="/people/:id" /> 
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
