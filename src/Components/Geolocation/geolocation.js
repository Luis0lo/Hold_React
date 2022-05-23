import { useState, useEffect } from 'react';
import Map from './map';

const Geolocation = () => {
  const [coords, setCoords] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
      },
      function (error) {
        console.error('Error Code = ' + error.code + ' - ' + error.message);
      }
    );
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoords(`${position.coords.latitude}, ${position.coords.longitude}`);
    });
  }, []);


  return (
    <div>
      <h1>coords</h1>
        <p>{coords}</p>
        <Map/>
    </div>
  );
};

export default Geolocation;