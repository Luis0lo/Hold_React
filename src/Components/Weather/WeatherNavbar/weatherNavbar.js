import css from './weatherNavbar.module.css';
import { BsBookmarkPlus, BsBookmarkDash } from 'react-icons/bs';

const WeatherNavbar = ({
  selectDay,
  weather,
  locationDetails,
  addFavouriteLocation,
  removeFavouriteLocation,
  favouriteLocations,
}) => {
  const addButton = (
    <button onClick={() => addFavouriteLocation(locationDetails.id)}>
      <BsBookmarkPlus />
    </button>
  );
  const removeButton = (
    <button onClick={() => removeFavouriteLocation(locationDetails.id)}>
      <BsBookmarkDash />
    </button>
  );

  return (
    <div className={css.weatherNavbarContainer}>
      <div>
        {locationDetails.city ? <b>{locationDetails.city}</b> : <>City</>}
        {locationDetails.id &&
          !favouriteLocations.includes(locationDetails.id) && <>{addButton}</>}
        {favouriteLocations.includes(locationDetails.id) && <>{removeButton}</>}
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
