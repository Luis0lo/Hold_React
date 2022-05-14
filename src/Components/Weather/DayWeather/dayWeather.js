import css from './dayWeather.module.css';

const DayWeather = (props) => {
  const day = {
    day: '14th',
    feelsLikeAvg: '20 °C',
    humidity: '43 %',
    icon: '03d',
    month: 'May',
    sunrise: '5:10 am',
    sunset: '20:43 pm',
    tempAver: '21 °C',
    tempMax: '22 °C',
    tempMin: '9 °C',
    weather: 'Clouds',
    weatherDescription: 'scattered clouds',
    weekday: 'Saturday',
    windSpeed: '3.21 m/s',
  };

  return (
    <div className={css.dayWeatherContainer}>
      <div className={`${css.dateHeader} ${css.globalStyle}`}>
        {day.weekday} {day.day} {day.month} 2022
      </div>
      <div className={css.weatherDetails}>
        <div className={`${css.icon} ${css.globalStyle}`}>
          <p>{day.weatherDescription}</p>
          <img
            src={`http://openweathermap.org/img/w/${day.icon}.png`}
            alt={day.weather}
          />
          <p>Humidity {day.humidity}</p>
          <p>Wind {day.windSpeed}</p>
        </div>
        <div className={`${css.temperature} ${css.globalStyle}`}>
          <p>max {day.tempMax}</p>
          <p>min {day.tempMin}</p>
          <p>Avg {day.tempAver}</p>
          <p>Feels {day.feelsLikeAvg}</p>
        </div>
        <div className={`${css.extraDetails} ${css.globalStyle}`}>
          <p>Sunrise {day.sunrise}</p>
          <p>Sunset {day.sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default DayWeather;
