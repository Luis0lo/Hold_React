import { useState } from 'react';
import LocationInput from '../Components/Weather/LocationInput/locationInput';

const Weather = () => {
  const [location, setLocation] = useState('');
  console.log(location);

  const searchLocation = () => {
    console.log(location);
  };

  return (
    <div
      style={{
        marginTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'beige',
      }}
    >
      <LocationInput
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
    </div>
  );
};

export default Weather;
