import './App.css';
import Quotes from '../Quotes';
// import Holdings from '../Holdings';
import RandomQuote from '../RandomQuote';

function App() {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className="App">
      <h1 className="LuisRodrigues">Luis Rodrigues</h1>
      {/* <Holdings /> */}
      <RandomQuote API_URL={API_URL} />
      <Quotes API_URL={API_URL} />
    </div>
  );
}

export default App;
