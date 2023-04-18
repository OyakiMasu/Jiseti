import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Registerpage from './components/Registerpage';
import { Routes, Route } from 'react-router-dom';




function App() {
  
    return (
      <div className="overlay">
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/registerpage" element={<Registerpage/>}></Route>
     
      </Routes>
    </div>
    )
}

export default App;
