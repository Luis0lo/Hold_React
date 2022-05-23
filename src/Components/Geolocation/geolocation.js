import { useState, useEffect } from 'react';

const mapApiKey = process.env.REACT_APP_MAP_API_KEY

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
    </div>
  );
};

export default Geolocation;