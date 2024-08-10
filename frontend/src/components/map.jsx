import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error(err);
          alert('Unable to fetch your location. Default location will be used.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: "500px", width: "100%" }}
        className="shadow-lg rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            You are here!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
