import { useState, useEffect, useCallback } from 'react';
import CalendarInput from './CalendarInput/calendarInput';
import DisplayBirthWeather from './displayBirthWeather';
import css from './historicWeather.module.css'


const HistoricWeather = () => {
  const [birthdayInfo, setBirthdayInfo] = useState(null);
  const [birthdayWeatherData, setBirthdayWeatherData] = useState(null)

  const getHistoricData = useCallback(async () => {
    const historicApiKey = process.env.REACT_APP_HISTORIC_WEATHER_API;
    if (birthdayInfo) {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${birthdayInfo.birthdayLocation}/${birthdayInfo.birthdayDate}/${birthdayInfo.birthdayDate}?unitGroup=metric&include=days&key=${historicApiKey}&contentType=json`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBirthdayInfo(null)
        setBirthdayWeatherData(data);
        
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [birthdayInfo]);

  useEffect(() => {
    getHistoricData();
  }, [getHistoricData]);

  return (
    <div className={css.historicWeatherOuterContainer}>
      <p>How was the weather like in your birthday</p>
      <CalendarInput setBirthdayInfo={setBirthdayInfo} />
      {birthdayWeatherData && <DisplayBirthWeather birthdayWeatherData={birthdayWeatherData}/>}
    </div>
  );
};

export default HistoricWeather;

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/caracas/1989-08-28/1989-08-28?unitGroup=metric&include=hours&key=YOUR_API_KEY&contentType=json
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/caracas/1989-08-28/1989-08-28?unitGroup=metric&key=${apiKey}&contentType=json