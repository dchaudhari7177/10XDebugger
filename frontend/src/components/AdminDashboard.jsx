// src/components/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Adjust the URL based on your server

const AdminDashboard = () => {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    socket.on('displayCoordinates', (data) => {
      setCoordinates(data); // Update the state with the received coordinates
    });

    return () => {
      socket.off('displayCoordinates'); // Clean up the event listener when the component unmounts
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      {coordinates.latitude && coordinates.longitude ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Coordinates</h2>
          <p className="text-lg text-gray-600">Latitude: {coordinates.latitude}</p>
          <p className="text-lg text-gray-600">Longitude: {coordinates.longitude}</p>
        </div>
      ) : (
        <p className="text-xl text-gray-600">No user has reported being unsafe yet.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
