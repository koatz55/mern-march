import './App.css';
import BirthdayCard from './components/BirthdayCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BirthdayCard 
          firstName = {"Sasuke"}
          lastName = {"Uchiha"}
          pic = {"https://yt3.ggpht.com/a/AATXAJyatTImWtppjEVMV1n95VAgYL7KVvDTr7_QpA=s900-c-k-c0xffffffff-no-rj-mo"}
          age = {"17"}
          hair = {"Black"}
        />

        <BirthdayCard 
          firstName = {"Naruto"}
          lastName = {"Uzumaki"}
          pic = {"https://yt3.ggpht.com/a/AGF-l7_LZlsUz5l1dSwm56nzYCYa5Wz73Z-jTZd_TQ=s900-c-k-c0xffffffff-no-rj-mo"}
          age = {"17"}
          hair = {"Blonde"}
        />
      </header>
    </div>
  );
}

export default App;
