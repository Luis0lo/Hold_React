import css from './dayWeather.module.css';

const DayWeather = ({ dayDetails }) => {
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
        </div>
      )}
    </>
  );
};

export default DayWeather;
