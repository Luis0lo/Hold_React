import { useEffect, useCallback } from 'react';

const HistoricWeather = () => {
  const historicApiKey = process.env.REACT_APP_HISTORIC_WEATHER_API;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/caracas/1989-08-28/1989-08-28?unitGroup=metric&include=days&key=${historicApiKey}&contentType=json`;

  const getHistoricData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }, [url]);

  useEffect(() => {
    getHistoricData();
  }, [getHistoricData]);

  return <div></div>;
};

export default HistoricWeather;
