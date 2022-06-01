import { useState, useEffect, useCallback } from 'react';
import CalendarInput from './calendarInput';

const HistoricWeather = () => {
  const [birthdayInfo, setBirthdayInfo] = useState(null);

  const getHistoricData = useCallback(async () => {
    const historicApiKey = process.env.REACT_APP_HISTORIC_WEATHER_API;
    if (birthdayInfo) {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${birthdayInfo.birthdayLocation}/${birthdayInfo.birthdayDate}/${birthdayInfo.birthdayDate}?unitGroup=metric&include=days&key=${historicApiKey}&contentType=json`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [birthdayInfo]);

  useEffect(() => {
    getHistoricData();
  }, [getHistoricData]);

  return (
    <div
      style={{
        margin: '0.5rem 0',
        textAlign: 'center',
        border: '1px solid',
        borderRadius: '0.3rem',
        padding: '0.5rem',
      }}
    >
      <p>How was the weather like in your birthday</p>

      <CalendarInput setBirthdayInfo={setBirthdayInfo} />
    </div>
  );
};

export default HistoricWeather;
