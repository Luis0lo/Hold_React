import HistoricWeather from '../Components/Weather/HistoricWeather/historicweather';
import css from './historicalWeather.module.css';

const HistoricalWeather = () => {
  return (
    <div className={css.mainContainer}>
      <div></div>
      <div>
        <HistoricWeather />
      </div>
      <div></div>
    </div>
  );
};

export default HistoricalWeather;
