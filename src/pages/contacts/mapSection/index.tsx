import { memo } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { coordinates, containerStyle } from 'constants/googleMapParams';

import { StyledMapSection } from './styled';

const MapSection = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY!,
  });

  return isLoaded ? (
    <StyledMapSection>
      <GoogleMap mapContainerStyle={containerStyle} zoom={10} center={coordinates.belarus}>
        <Marker position={coordinates.poland} />
        <Marker position={coordinates.germany} />
        <Marker position={coordinates.belarus} />
      </GoogleMap>
    </StyledMapSection>
  ) : (
    <div>Map is loading...</div>
  );
};

export default memo(MapSection);
