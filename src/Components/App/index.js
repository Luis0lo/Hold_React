import Quotes from '../Quotes';
import Holdings from '../Holdings';
import RandomQuote from '../RandomQuote';
import css from "./App.module.css";


function App() {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className={css.App}>
      <h1 className={css.LuisRodrigues}>Luis Rodrigues</h1>
        <Holdings />
      <div className={css.quotesContainer}>
        <RandomQuote API_URL={API_URL} />
        <Quotes API_URL={API_URL} />
      </div>
    </div>
  );
}

export default App;
