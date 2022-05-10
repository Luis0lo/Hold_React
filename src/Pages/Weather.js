import { useState } from 'react';
import LocationInput from '../Components/Weather/LocationInput/locationInput';
import moment from "moment";

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [locationDetails, setlocationDetails] = useState([]);
  const [weather, setWeather] = useState([]);
  let weatherInfo = [];
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
        const { daily } = await response2.json();
        setlocationDetails({
          city: currentDay.name,
          country: currentDay.sys.country,
          id: currentDay.sys.id,
        });

        daily.forEach((day, i) => {
          weatherInfo = [
            ...weatherInfo,
            {
              windSpeed: day.wind_speed + ' m/s',
              month: moment.unix(daily[i].dt).format('MMMM'),
              day: moment.unix(daily[i].dt).format('Do'),
              weekDay: moment.unix(daily[i].dt).format('dddd'),
              feelsLikeAvg: Math.round(day.feels_like.day) + ' °C',
              humidity: Math.round(day.humidity) + ' %',
              sunrise: moment.unix(day.sunrise).format("H:mm a"),
              sunset: moment.unix(day.sunset).format("H:mm a"),
              tempAver: Math.round(day.temp.day) + ' °C',
              tempMax: Math.round(day.temp.max) + ' °C',
              tempMin: Math.round(day.temp.min) + ' °C',
              weather: day.weather[0].main,
              weatherDescription: day.weather[0].description,
              icon: day.weather[0].icon,
            },
          ];
        });
        console.log(weatherInfo);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log('nothing yet');
    }
  };
  console.log(locationDetails);
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
