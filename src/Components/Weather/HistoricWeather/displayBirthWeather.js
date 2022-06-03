import css from './historicWeather.module.css';
import { GiSunset } from 'react-icons/gi';
import { BsFillSunriseFill, BsThermometerHalf } from 'react-icons/bs';

const DisplayBirthWeather = ({ birthdayWeatherData }) => {
  const weather = birthdayWeatherData.days[0];
  // console.log(birthdayWeatherData);
  
  return (
    <div>
      <p>{birthdayWeatherData.resolvedAddress}</p>
      <div className={css.birthdayWeatherInnerContainer}>
        <div className={css.temperature}>
          <div>
            <p>Max {weather.tempmax}</p>
            <p>Avg {weather.temp}</p>
            <p>Min {weather.tempmin}</p>
          </div>
          <div>
            <BsThermometerHalf size={50} color="blue" />
          </div>
          <div className={css.metricUnit}>°C</div>
        </div>
        <div>
          <div className={css.sunContainer}>
            <p>
              Sunrise <span>{weather.sunrise.slice(0, -3)} </span>
            </p>
            <BsFillSunriseFill size={40} color="orange" />
          </div>
          <div className={css.sunContainer}>
            <p>
              Sunset <span>{weather.sunset.slice(0, -3)} </span>
            </p>
            <GiSunset size={40} color="brown" />
          </div>{' '}
        </div>
        <div>
          <p>{weather.conditions}</p>
          <img
            style={{ width: '100px', margin: 'auto' }}
            src={`/assets/Api-icons-svg/${weather.icon}.svg`}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayBirthWeather;
