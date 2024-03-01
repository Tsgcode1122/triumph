import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [37.7749, -122.4194]; // Replace with your actual latitude and longitude

  return (
    <div>
      <h2>Our Location</h2>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "300px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Click to view in Google Maps</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
