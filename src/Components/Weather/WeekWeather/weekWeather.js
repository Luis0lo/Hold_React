import css from './weekWeather.module.css';
const WeekWeather = (props) => {
  const weather = props.weather;

  return (
    <div className={css.weatherContainer}>
      {weather.length > 0 &&
        weather.map((day, i) => {
          return (
            <div key={day.day}className={css.weekWeatherCard}>
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
    </div>
  );
};

export default WeekWeather;
