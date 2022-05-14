import css from './weatherNavbar.module.css';

const WeatherNavbar = ({ selectDay, weather, locationDetails }) => {
  return (
    <div className={css.weatherNavbarContainer}>
      <div>
        {locationDetails.city ? <>{locationDetails.city}</> : <>City</>}
      </div>
      {weather.length ? (
        <div>
          <label for="weekdays">Day </label>
          <select
            id="weekdays"
            name="weekdays"
            onChange={(e) => selectDay(e.target.value)}
          >
            <option hidden>Select the day</option>
            {weather.map((day) => (
              <option className={css.dropDown} key={day.day} value={day.day}>
                {day.day} {day.weekday} {day.month}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <>Weekdays</>
      )}
    </div>
  );
};

export default WeatherNavbar;
