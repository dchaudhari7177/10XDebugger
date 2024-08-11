// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Adjust the URL based on your server

const Home = () => {
  const navigate = useNavigate();

  const handleUnsafeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log("User's Location:", latitude, longitude);

        // Send the coordinates to the admin panel via Socket.io
        socket.emit('userUnsafe', { latitude, longitude });

        // Redirect to Admin Dashboard
        navigate('/admin-dashboard');
      }, (error) => {
        console.error("Error getting location:", error);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <motion.button
        className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold mb-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleUnsafeClick}
      >
        I am unsafe
      </motion.button>
      {/* ...rest of the component */}
    </div>
  );
};

export default Home;
