import './App.css';
import IdCard from './components/IdCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IdCard 
          firstName = {"Edward"}
          lastName = {"Newgate"}
          pic = {"/Edward_Newgate.webp"}
          age = {"72"}
          hair = {"White"}
        />
        <IdCard 
          firstName = {"Donquixote"}
          lastName = {"Doflamingo"}
          pic = {"/doflamingo.jpg"}
          age = {"41"}
          hair = {"Blond"}
        />        
        <IdCard 
          firstName = {"Roronoa"}
          lastName = {"Zoro"}
          pic = {"/Zoro.jpg"}
          age = {"21"}
          hair = {"Green"}
        />
        <IdCard 
          firstName = {"Nefeltari"}
          lastName = {"Vivi"}
          pic = {"/Vivi.jpg"}
          age = {"18"}
          hair = {"Blue"}
        />
      </header>
    </div>
  );
}

export default App;
