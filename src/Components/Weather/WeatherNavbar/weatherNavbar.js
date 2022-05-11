import css from './weatherNavbar.module.css';

const WeatherNavbar = (props) => {
  const handleDay = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={css.weatherNavbarContainer}>
      <div>
        {props.locationDetails.city ? <>{props.locationDetails.city}</> : <>City</>}
      </div>
       {props.weather.length ? <div>
        <label for="weekdays">Day </label>
        <select id="weekdays" name="weekdays" onChange={(e) => handleDay(e)}>
          <option hidden>Select the day</option>
          {props.weather.map((day) => (
            <option className={css.dropDown} key={day.day} value={day.day}>
              {day.day} {day.weekday} {day.month}
            </option>
          ))}
        </select>
      </div> : <>Weekdays</>}
    </div>
  );
};

export default WeatherNavbar;
