import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet CSS

const StreetMap = () => {
    const position = [43.214, 27.914];
    const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    const mapboxStyleId = import.meta.env.VITE_MAPBOX_STYLE_ID;    

    return (
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`}
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
            id={mapboxStyleId}
        />
        <Marker position={position}>
        </Marker>
      </MapContainer>
    );
}

export default StreetMap;
