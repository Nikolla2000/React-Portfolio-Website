import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

const StreetMap = () => {
    const position = [43.214, 27.914];
    const mapboxAccessToken = 'pk.eyJ1Ijoibmlrb2xsYTIwMCIsImEiOiJjbG1peDJidTAwZDEwM2VveHpyZm1ra3p6In0.ZHlGSMZ3zOjNzu1ox3Pa6w'
    const mapboxStyleId = 'nikolla200/clmix079w00a701qt5hl646ds' 

    return (
      <MapContainer 
            center={position} 
            zoom={13} 
            style={{ height: '500px', width: '70vw', margin: '-20px auto 70px', zIndex: "1"}}>
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
