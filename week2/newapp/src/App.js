import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className ="Greeting">Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul className = "To-DO">
          <li>
            Learn React 
          </li>
          <li>
            Turn in at least 60% core assignments
          </li>
          <li>
            DQs
          </li>
          <li>
            Feed my cat and dog 
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
