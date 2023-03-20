import './App.css';
import Counter from './components/Counter';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Product />
      </header>
    </div>
  );
}

export default App;
