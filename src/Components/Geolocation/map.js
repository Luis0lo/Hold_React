import { GoogleMap, LoadScript } from '@react-google-maps/api';
const mapApiKey = process.env.REACT_APP_MAP_API_KEY

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 53.381,
    lng: -2.19
  };

const Map = () => {
    return (
    <LoadScript
      googleMapsApiKey={mapApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map