import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import css from './locationInput.module.css';

const LocationInput = (props) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e);
  };
  const handleClick = () => {
    props.setLocation(search);
    setSearch('');
  };

  return (
    <div className={css.locationContainer}>
      <input
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClick();
          }
        }}
        placeholder="Enter Location"
        type="text"
      />
      <button onClick={handleClick}>
        <BsSearch />
      </button>
    </div>
  );
};

export default LocationInput;

//without the useEffect hook we had previuosly
// onChange={(event) => props.setLocation(event.target.value)}
// onKeyPress={props.searchLocation}

/* <button onClick={props.searchLocation}>
<BsSearch />
</button> */

// and inside our search fetch this conditional
// if (event.key === 'Enter' || event.type === 'click') {
