import css from './favouriteLocations.module.css';
const FavouriteLocations = () => {
  return (
    <div className={css.favouritesMainContainer}>
      <div className={css.favouritesInnerContainer}>
        <div>
          <p>London</p>
          <p className={css.temperature}>23C - 14C</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/40" alt="" />
        </div>
      </div>
      <div className={css.favouritesInnerContainer}>
        <div>
          <p>London</p>
          <p className={css.temperature}>23C - 14C</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/40" alt="" />
        </div>
      </div>
      <div className={css.favouritesInnerContainer}>
        <div>
          <p>London</p>
          <p className={css.temperature}>23C - 14C</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/40" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FavouriteLocations;
