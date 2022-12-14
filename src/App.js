import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import NavBar from './components/NavBar';
import Asteroide from './components/Asteroide';
import Epic from './components/Epic';

function App() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/curiosity" element={ <NasaPhoto />} />
            <Route path="/asteroide" element={ <Asteroide />} />
            <Route path="/epic" element={ <Epic />} />
        </Routes>
    </div>
  );
}

export default App;
