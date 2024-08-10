import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)
  const [coordinates, setCoordinates] = useState({ lat: 51.505, lng: -0.09 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          setPosition([latitude, longitude]);
          setCoordinates({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
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

      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-700">
          <strong>Latitude:</strong> {coordinates.lat}
        </p>
        <p className="text-gray-700">
          <strong>Longitude:</strong> {coordinates.lng}
        </p>
      </div>
    </div>
  );
};

export default Map;
