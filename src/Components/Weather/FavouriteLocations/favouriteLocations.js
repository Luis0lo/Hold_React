import css from './favouriteLocations.module.css';

const FavouriteLocations = ({
  favLocationWeather,
  favouriteLocations,
  setLocation,
}) => {
  return (
    <>
      {favouriteLocations.length >= 1 && (
        <div className={css.favouritesMainContainer}>
          {favLocationWeather.map((location) => {
            return (
              <div
                onClick={(e) => {
                  setLocation(location.city);
                }}
                key={location.city}
                className={css.favouritesInnerContainer}
              >
                <div>
                  <p>{location.city}</p>
                  <p className={css.temperature}>
                    {' '}
                    <i>feels:</i> {location.feels}°C
                  </p>
                </div>
                <div>
                  <img
                    src={`http://openweathermap.org/img/w/${location.icon}.png`}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FavouriteLocations;
