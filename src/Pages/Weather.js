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
  const [favouriteLocations, setFavouriteLocations] = useState([]);
  const [favLocationWeather, setFavLocationWeather] = useState([]);
  let weatherInfo = [];

  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  
  useEffect(() => {

    const idsUrl = favouriteLocations.join(',');
    const urlFavLocations = `https://api.openweathermap.org/data/2.5/group?id=${idsUrl}&units=metric&appid=${weatherApiKey}`;

    async function getfavouritesWeather() {
      try {
        const response = await fetch(urlFavLocations);
        const { list } = await response.json();
        let newList = [];
        list.forEach((location) => {
          newList = [
            ...newList,
            {
              city: location.name,
              feels: Math.floor(location.main.feels_like),
              maxTemp: Math.floor(location.main.temp_max),
              minTemp: Math.floor(location.main.temp_min),
              icon: location.weather[0].icon,
            },
          ];
        });
        setFavLocationWeather(newList);
      } catch (err) {
        console.log('favoutires', err.message);
      }
    }
    if (favouriteLocations.length) {
      getfavouritesWeather();
    }
  }, [favouriteLocations, weatherApiKey]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherApiKey}`;

  const searchLocation = async (event) => {
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
  };
  useEffect(() => {
    if (location) {
      searchLocation();
    }
  }, [location]);
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
    console.log(index);
    if (location && favouriteLocations && index >= 0) {
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
      <FavouriteLocations
        favLocationWeather={favLocationWeather}
        favouriteLocations={favouriteLocations}
        searchLocation={searchLocation}
        setLocation={setLocation}
      />
      <WeatherNavbar
        locationDetails={locationDetails}
        weather={weather}
        selectDay={selectDay}
        addFavouriteLocation={addFavouriteLocation}
        removeFavouriteLocation={removeFavouriteLocation}
        favouriteLocations={favouriteLocations}
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
