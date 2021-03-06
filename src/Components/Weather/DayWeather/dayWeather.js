import css from './dayWeather.module.css';
import HourlyChart from '../Chart/hourlyChart';

const DayWeather = ({ dayDetails, hourlyWeather }) => {
  let forecastIndexDay = 0;
  let currentDayWeather,
    tomorrowWeather = {};

  if (dayDetails.length > 0) {
    forecastIndexDay = dayDetails[0].indexDay;
    currentDayWeather = hourlyWeather.slice(0, 24);
    const midNight = hourlyWeather.findIndex(({ hour }) => hour === '0h');
    tomorrowWeather = hourlyWeather.slice(midNight, midNight + 25);
  }

  return (
    <>
      {dayDetails.length > 0 && (
        <div className={css.dayWeatherContainer}>
          <div className={`${css.dateHeader} ${css.globalStyle}`}>
            {dayDetails[0].weekday} {dayDetails[0].day} {dayDetails[0].month}{' '}
            2022
          </div>
          <div className={css.weatherDetails}>
            <div className={`${css.icon} ${css.globalStyle}`}>
              <p>{dayDetails[0].weatherDescription}</p>
              <img
                src={`http://openweathermap.org/img/w/${dayDetails[0].icon}.png`}
                alt={dayDetails[0].weather}
              />
              <p>Humidity {dayDetails[0].humidity}</p>
              <p>Wind {dayDetails[0].windSpeed}</p>
            </div>
            <div className={`${css.temperature} ${css.globalStyle}`}>
              <p>max {dayDetails[0].tempMax}</p>
              <p>min {dayDetails[0].tempMin}</p>
              <p>Avg {dayDetails[0].tempAver}</p>
              <p>Feels {dayDetails[0].feelsLikeAvg}</p>
            </div>
            <div className={`${css.extraDetails} ${css.globalStyle}`}>
              <p>Sunrise {dayDetails[0].sunrise}</p>
              <p>Sunset {dayDetails[0].sunset}</p>
            </div>
          </div>
          {forecastIndexDay === 0 && (
            <HourlyChart
              hourlyWeather={hourlyWeather}
              data={currentDayWeather}
            />
          )}
          {forecastIndexDay === 1 && (
            <HourlyChart hourlyWeather={hourlyWeather} data={tomorrowWeather} />
          )}
        </div>
      )}
    </>
  );
};

export default DayWeather;
