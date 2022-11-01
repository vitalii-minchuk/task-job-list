import { memo } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import mapStyles from './mapStyles';
import LocationIcon from '../../assets/images/location-icon.png';

const containerStyle = {
  width: '600px',
  height: '400px',
};
const center = {
  lat: -3.745,
  lng: -38.523,
};

function SmallMap() {
  const { isLoaded } = useLoadScript({
    language: 'en',
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div className="w-[600px] h-[380px] rounded-b-lg overflow-hidden">
      {isLoaded ? (
        <GoogleMap
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: false,
          }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker
            position={center}
            icon={{
              url: LocationIcon,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(26, 36),
            }}
          />
        </GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default memo(SmallMap);
