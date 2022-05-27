import css from './weekWeather.module.css';
import WeatherChart from '../Chart/weatherChart';
const WeekWeather = (props) => {
  const {weather, dayDetails, selectDay} = props;

  return (
    <div className={css.weatherContainer}>
      {(weather.length > 0 && dayDetails.length < 1) &&
        weather.map((day, i) => {
          return (
            <div key={day.day}className={css.weekWeatherCard}
            onClick={() => selectDay(day.day)}>
              <div className={css.dayInfoContainer}>
                <div className={css.dayNumber}>{day.day}</div>
                <div className={css.dayMonth}>
                  <p>{day.month}</p>
                  <p>{day.weekday}</p>
                </div>
              </div>
              <div className={css.weatherInfoContainer}>
                <div className={css.weatherIcon}>
                  <img
                    className="smallcardicon"
                    src={`http://openweathermap.org/img/w/${day.icon}.png`}
                    alt={day.weather}
                  />
                </div>
                <div className={css.weatherTemperature}>
                  <p>{day.tempMax}</p>
                  <p>{day.tempMin}</p>
                </div>
              </div>
            </div>
          );
        })}
        {dayDetails.length === 0 && <WeatherChart weather={weather}/>}
    </div>
  );
};

export default WeekWeather;
