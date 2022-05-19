import css from './weatherNavbar.module.css';
import {
  BsBookmarkPlus,
  BsBookmarkDash,
} from 'react-icons/bs';

const WeatherNavbar = ({ selectDay, weather, locationDetails, addFavouriteLocation, removeFavouriteLocation }) => {
  return (
    <div className={css.weatherNavbarContainer}>
      <div>
        {locationDetails.city ? <>{locationDetails.city}</> : <>City</>}
        <button onClick={()=> addFavouriteLocation(locationDetails.city)}>
          <BsBookmarkPlus />
        </button>
        <button onClick={()=> removeFavouriteLocation(locationDetails.city)}>
          <BsBookmarkDash />
        </button>
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
