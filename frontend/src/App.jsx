import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Map from './components/Map';

function Home() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  const handleMapRedirect = () => {
    navigate('/map');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to DisasterReady</h1>
      <div className="space-x-4">
        <button
          onClick={handleLoginRedirect}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
        >
          Go to Login
        </button>
        <button
          onClick={handleSignupRedirect}
          className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
        >
          Go to Signup
        </button>
        <button
          onClick={handleMapRedirect}
          className="bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
        >
          View Map
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/map" element={<Map />} /> {/* Add Map route */}
      </Routes>
    </Router>
  );
}

export default App;
