import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LocationInput from '../Components/Weather/LocationInput/locationInput';
import WeatherNavbar from '../Components/Weather/WeatherNavbar/weatherNavbar';
import WeekWeather from '../Components/Weather/WeekWeather/weekWeather';
import DayWeather from '../Components/Weather/DayWeather/dayWeather';
import FavouriteLocations from '../Components/Weather/FavouriteLocations/favouriteLocations';
import Geolocation from '../Components/Geolocation/geolocation';
import css from './weather.module.css';
import moment from 'moment';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [coords, setCoords] = useState(null);
  const [locationDetails, setlocationDetails] = useState([]);
  const [weather, setWeather] = useState([]);
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [dayDetails, setDayDetails] = useState([]);
  const [favouriteLocations, setFavouriteLocations] = useState([]);
  const [favLocationWeather, setFavLocationWeather] = useState([]);

  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const hereApiKey = process.env.REACT_APP_HERE_API_KEY;

  function isLocalStorageAvailable() {
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      const favLocations = JSON.parse(
        localStorage.getItem('favouriteLocations')
      );
      if (favLocations !== null) {
        setFavouriteLocations(favLocations);
      }
    }else{
      setLocation('London')
    }
  }, []);

  if (locationDetails.length === 0 && coords) {
    const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${coords.lat},${coords.lon}&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=${hereApiKey}`;
    const getCityFromCoordinates = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const city = data.Response.View[0].Result[0].Location.Address.City;
        setlocationDetails({ city });
      } catch (err) {
        console.log('Reverse Geolocation______', err.message);
      }
    };
    getCityFromCoordinates();
  }

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherApiKey}`;

    const searchLocation = async () => {
      try {
        const response1 = await fetch(url);
        const currentDay = await response1.json();
        setCoords({ lat: currentDay.coord.lat, lon: currentDay.coord.lon });
        setlocationDetails({
          city: currentDay.name,
          country: currentDay.sys.country,
          id: currentDay.id,
        });
      } catch (err) {
        console.log('Search Location______', err.message);
      }
    };
    if (location) {
      searchLocation();
    }
  }, [location, weatherApiKey]);

  useEffect(() => {
    if (favouriteLocations.length > 0) {
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
          console.log('Favourite Locations_____', err.message);
        }
      }

      getfavouritesWeather();
    }
  }, [favouriteLocations, weatherApiKey]);

  useEffect(() => {
    let weatherInfo = [];

    const searchLocation = async (event) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely&units=metric&appid=${weatherApiKey}`
        );
        const { hourly, daily } = await response.json();
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
        const weatherByHour = hourly.map((hours) => {
          return {
            hour: moment.unix(hours.dt).format('H') + 'h',
            feelsLike: hours.feels_like,
          };
        });

        setDayDetails([]);
        setWeather(weatherInfo);
        setHourlyWeather(weatherByHour);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (coords) {
      searchLocation();
    }
  }, [coords, weatherApiKey]);
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
      localStorage.setItem('favouriteLocations', JSON.stringify(locations));
      setFavouriteLocations(locations);
    }
  };

  const removeFavouriteLocation = (location) => {
    let index = favouriteLocations.findIndex((x) => x === location);
    if (location && favouriteLocations && index >= 0) {
      const locations = [
        ...favouriteLocations.slice(0, index),
        ...favouriteLocations.slice(index + 1),
      ];
      localStorage.setItem('favouriteLocations', JSON.stringify(locations));
      setFavouriteLocations(locations);
    }
  };

  const selectDay = (value) => {
    // const dayDetail = weather.filter(({ day }, i) => day === value);
    weather.forEach((dayWeather, indexDay) => {
      if (dayWeather.day === value) {
        setDayDetails([{ ...dayWeather, indexDay }]);
      }
    });
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.linkToHistoricalWeather}>
        <Link to="/weather/BirthdayWeather">
          <p>👶 Click here and discover the weather in your Birthday! 👶🏽</p>{' '}
        </Link>
      </div>

      <LocationInput location={location} setLocation={setLocation} />

      <FavouriteLocations
        favLocationWeather={favLocationWeather}
        favouriteLocations={favouriteLocations}
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
      <DayWeather
        weather={weather}
        dayDetails={dayDetails}
        hourlyWeather={hourlyWeather}
      />
      <Geolocation coords={coords} setCoords={setCoords} location={location} />
    </div>
  );
};

export default Weather;
