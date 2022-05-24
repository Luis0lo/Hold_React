import { useState, useEffect } from 'react';
import Map from './map';

const Geolocation = ({ coords, setCoords, location }) => {
  const [userPermission, setUserPermission] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      function (err) {
        if (err.code === 1) {
          setUserPermission(false);
        }
        console.log(err.message);
      }
    );
  }, [setCoords]);

  return location || userPermission ? (
    <Map coords={coords} />
  ) : (
    <p>
      Allow this website to access your location <br /> or type and search your
      location{' '}
    </p>
  );
};

export default Geolocation;

// https://react-google-maps-api-docs.netlify.app/#loadscript
