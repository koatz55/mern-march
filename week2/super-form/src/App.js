import './App.css';
import Box from './components/Box';
import { useState } from 'react';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  const [ boxList, setBoxList] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <Box boxList = {boxList} setBoxList = {setBoxList}/>
        <DisplayBoxes boxList = {boxList} setBoxList = {setBoxList}/>
      </header>
    </div>
  );
}

export default App;
