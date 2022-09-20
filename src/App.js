import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Firstpage from './components/Firstpage';
import Resultpage from './components/Resultpage';

const App =() =>{
  const[weight , setWeight]=useState("");
  const[size , setSize]=useState("");
  const[ss,setSs]=useState("Değerleri yanlış girdiniz")

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'  element={<Firstpage weight={weight} setWeight={setWeight} size={size} setSize={setSize} />}  />
          
          <Route path='/Resultpage' element={<Resultpage  weight={weight} setWeight={setWeight} size={size} setSize={setSize} ss={ss} setSs={setSs} />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
