import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet CSS

const StreetMap = () => {
    const position = [43.214, 27.914];
    const mapboxAccessToken = 'pk.eyJ1Ijoibmlrb2xsYTIwMCIsImEiOiJjbG1peDJidTAwZDEwM2VveHpyZm1ra3p6In0.ZHlGSMZ3zOjNzu1ox3Pa6w';
    const mapboxStyleId = 'nikolla200/clmix079w00a701qt5hl646ds';

    return (
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`}
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
            id={mapboxStyleId}
        />
        <Marker position={position}>
          <Popup>
            A sample marker with a popup.
          </Popup>
        </Marker>
      </MapContainer>
    );
}

export default StreetMap;
