import logo from './logo.svg';
import './App.css';
import BirthdayCard from './components/BirthdayCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BirthdayCard 
          firstName = {"Edward"}
          lastName = {"Newgate"}
          pic = {logo}
          age = {"72"}
          hair = {"White"}
        />
      </header>
    </div>
  );
}

export default App;
