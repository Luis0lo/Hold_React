import css from './locationInput.module.css';
import { BsSearch } from 'react-icons/bs';

const LocationInput = (props) => {
  return (
    <div className={css.locationContainer}>
      <input
        value={props.location}
        onChange={(event) => props.setLocation(event.target.value)}
        onKeyPress={props.searchLocation}
        placeholder="Enter Location"
        type="text"
      />
      <button onClick={props.searchLocation}>
        <BsSearch />
      </button>
    </div>
  );
};

export default LocationInput;
