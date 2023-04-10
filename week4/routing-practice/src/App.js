import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Numbers from './Components/Numbers';
import Words from './Components/Words';
import { 
  BrowserRouter, 
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Numbers/:num" element={<Numbers/>} />
            <Route path="/Words/:word" element={<Words/>} />
            {/* don't forget the :  it will run but no output*/}
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;