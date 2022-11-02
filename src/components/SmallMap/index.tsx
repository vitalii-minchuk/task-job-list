import { memo } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import mapStyles from './mapStyles';
import LocationIcon from '../../assets/images/location-icon.png';
import { LocationType } from '../../types';

interface ISmallMap {
  location?: LocationType;
}

function SmallMap({ location }: ISmallMap) {
  const { isLoaded } = useLoadScript({
    language: 'en',
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: location?.lat || 0,
    lng: location?.long || 0,
  };

  return (
    <div className="w-[600px] h-[380px] rounded-b-lg overflow-hidden">
      {isLoaded ? (
        <GoogleMap
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: false,
          }}
          mapContainerStyle={{
            width: '600px',
            height: '400px',
          }}
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

SmallMap.defaultProps = {
  location: {
    lat: 0,
    long: 0,
  },
};

export default memo(SmallMap);
