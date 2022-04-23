import Quotes from '../Quotes';
import Holdings from '../Holdings';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Navbar from '../Navbar/Navbar';
import css from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1 className={css.LuisRodrigues}>Luis Rodrigues</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
