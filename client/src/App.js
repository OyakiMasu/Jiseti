import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Registerpage from './components/Registerpage';
import AboutUs from './components/about';
import Report from './components/report';
import GeolocationDetector from './components/location';
import { Routes, Route } from 'react-router-dom';



function App() {
  
    return (
      <div className="overlay">
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/registerpage" element={<Registerpage/>}></Route>
        <Route exact path="/about" element={<AboutUs/>}></Route>
        <Route exact path="/report" element={<Report/>}></Route>
        <Route exact path="/location" element={<GeolocationDetector/>}></Route>

      </Routes>
    </div>
    )
}

export default App;
