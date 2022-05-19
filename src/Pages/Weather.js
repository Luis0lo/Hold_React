import { useState, useEffect } from 'react';
import LocationInput from '../Components/Weather/LocationInput/locationInput';
import WeatherNavbar from '../Components/Weather/WeatherNavbar/weatherNavbar';
import WeekWeather from '../Components/Weather/WeekWeather/weekWeather';
import DayWeather from '../Components/Weather/DayWeather/dayWeather';
import moment from 'moment';
import FavouriteLocations from '../Components/Weather/FavouriteLocations/favouriteLocations';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [locationDetails, setlocationDetails] = useState([]);
  const [weather, setWeather] = useState([]);
  const [dayDetails, setDayDetails] = useState([]);
  const [favouriteLocations, setFavouriteLocations] = useState([2643743 ,3530839]);
  const [favLocationWeather, setFavLocationWeather] = useState([]);
  let weatherInfo = [];

  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const idsUrl = favouriteLocations.join(',');
  const urlFavLocations = `https://api.openweathermap.org/data/2.5/group?id=${idsUrl}&units=metric&appid=160cec49564aa8277fc523ac242c7bb0`;

  async function getfavouritesWeather() {
    console.log('fetching')
    const response = await fetch(urlFavLocations);
    const { list } = await response.json();
     setFavLocationWeather(list);
  }
  console.log(favLocationWeather);

  useEffect(() => {
    if (favouriteLocations.length) {
      getfavouritesWeather();
    }
  }, [favouriteLocations]);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherApiKey}`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      try {
        const response1 = await fetch(url);
        const currentDay = await response1.json();
        // console.log(location, currentDay);
        const response2 = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${currentDay.coord.lat}&lon=${currentDay.coord.lon}&exclude=minutely&units=metric&appid=${weatherApiKey}`
        );
        const { daily } = await response2.json();
        setlocationDetails({
          city: currentDay.name,
          country: currentDay.sys.country,
          id: currentDay.id,
        });
        // console.log('Response______ ' ,daily);
        daily.forEach((day, i) => {
          weatherInfo = [
            ...weatherInfo,
            {
              windSpeed: day.wind_speed + ' m/s',
              month: moment.unix(daily[i].dt).format('MMMM'),
              day: moment.unix(daily[i].dt).format('Do'),
              weekday: moment.unix(daily[i].dt).format('dddd'),
              feelsLikeAvg: Math.round(day.feels_like.day) + ' °C',
              humidity: Math.round(day.humidity) + ' %',
              sunrise: moment.unix(day.sunrise).format('H:mm a'),
              sunset: moment.unix(day.sunset).format('H:mm a'),
              tempAver: Math.round(day.temp.day) + ' °C',
              tempMax: Math.round(day.temp.max) + ' °C',
              tempMin: Math.round(day.temp.min) + ' °C',
              weather: day.weather[0].main,
              weatherDescription: day.weather[0].description,
              icon: day.weather[0].icon,
            },
          ];
        });
        setDayDetails([]);
        setWeather(weatherInfo);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log('');
    }
  };
  // console.log('Data stored_______', weather);
  // console.log('Day Details________', dayDetails);
  // console.log('Day Details________', favouriteLocations);

  const addFavouriteLocation = (location) => {
    if (
      location &&
      favouriteLocations.length < 3 &&
      !favouriteLocations.includes(location)
    ) {
      const locations = [...favouriteLocations, location];
      setFavouriteLocations(locations);
    }
  };

  const removeFavouriteLocation = (location) => {
    let index = favouriteLocations.findIndex((x) => x === location);
    if (location && favouriteLocations && index > 0) {
      const locations = [
        ...favouriteLocations.slice(0, index),
        ...favouriteLocations.slice(index + 1),
      ];
      setFavouriteLocations(locations);
    }
  };

  const selectDay = (value) => {
    const dayDetail = weather.filter(({ day }) => day === value);
    setDayDetails(dayDetail);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LocationInput
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <FavouriteLocations />
      <WeatherNavbar
        locationDetails={locationDetails}
        weather={weather}
        selectDay={selectDay}
        addFavouriteLocation={addFavouriteLocation}
        removeFavouriteLocation={removeFavouriteLocation}
      />
      <WeekWeather
        weather={weather}
        dayDetails={dayDetails}
        selectDay={selectDay}
      />
      <DayWeather weather={weather} dayDetails={dayDetails} />
    </div>
  );
};

export default Weather;
