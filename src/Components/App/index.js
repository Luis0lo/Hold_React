import Quotes from '../Quotes';
import Holdings from '../Holdings';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Navbar from '../Navbar/Navbar';
import Weather from '../../Pages/Weather';
import HistoricalWeather from '../../Pages/HistoricalWeather';
import ErrorMessage from '../../Pages/Error';
import { AuthProvider } from '../Context/AuthContext';
import SignupPage from '../../Pages/Signup';
import Dashboard from '../../Pages/Dashboard';
import LoginPage from '../../Pages/Login';
// import css from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Authentication/PrivateRoute';
import ForgotPasswordPage from '../../Pages/ForgotPasswordPage';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather" element={<Weather />} />
          <Route
            path="/weather/BirthdayWeather"
            element={<HistoricalWeather />}
          />
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>{' '}
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
