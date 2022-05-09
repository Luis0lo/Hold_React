import { useState } from 'react';
import LocationInput from '../Components/Weather/LocationInput/locationInput';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState([]);
  console.log(location);

  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherApiKey}`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      try {
        const response1 = await fetch(url);
        const currentDay = await response1.json();
        console.log(location, currentDay);
        const response2 = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${currentDay.coord.lat}&lon=${currentDay.coord.lon}&exclude=minutely&units=metric&appid=${weatherApiKey}`
        );
        const weekWeather = await response2.json();
        console.log(weekWeather);
        setWeather({
          city: currentDay.name,
          country: currentDay.sys.country,
          id: currentDay.sys.id,
        });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log('nothing yet');
    }
  };
  console.log(weather);
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
