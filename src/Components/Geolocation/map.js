import { GoogleMap, LoadScript } from '@react-google-maps/api';
const mapApiKey = process.env.REACT_APP_MAP_API_KEY;

const containerStyle = {
  width: '100vw',
  height: '400px',
};

const Map = ({ coords }) => {
  let center;
  if (coords) {
    center = {
      lat: coords.lat,
      lng: coords.lon,
    };
  }

  return (
    coords && (
      <LoadScript googleMapsApiKey={mapApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    )
  );
};

export default Map;
