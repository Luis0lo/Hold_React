import { useState } from 'react';
import css from './locationInput.module.css';
import { BsSearch } from 'react-icons/bs';

const LocationInput = (props) => {
  const [search, setSearch] = useState('')

const handleSearch = (e) => {
  setSearch(e)
}

  return (
    <div className={css.locationContainer}>
      <input
        onChange={(event) => handleSearch(event.target.value)}
        onKeyPress={(event)=>{handleSearch(event.target.value)}}
        onKeyDown={e => {
            if (e.key === "Enter") props.setLocation(search);
          }}
        placeholder="Enter Location"
        type="text"
      />
      <button onClick={()=>{props.setLocation(search)}}>
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
