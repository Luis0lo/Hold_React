import Quotes from '../Quotes';
import Holdings from '../Holdings';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Navbar from '../Navbar/Navbar';
import Weather from '../../Pages/Weather';
import ErrorMessage from '../../Pages/Error';
// import css from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
