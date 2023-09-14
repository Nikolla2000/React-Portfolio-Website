import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const StreetMap = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.7128,
    lng: -74.0060,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAua5Cs38XIfp_aV7t7WE68DK8jGqVZf5w">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {/* Add map markers, polygons, or other map components here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default StreetMap;
