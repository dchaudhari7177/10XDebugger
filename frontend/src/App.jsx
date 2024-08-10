import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Admin-login';
import Signup from './components/Admin-signup';
import Map from './components/Map';
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; // Import Home component
import GeneralLogin from './components/General_login';
import GeneralSignup from './components/General_signup';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/General-login" element={<GeneralLogin />} />
          <Route path="/General-signup" element={<GeneralSignup />} />
          <Route path="/Admin-login" element={<Login />} />
          <Route path="/Admin-signup" element={<Signup />} />
          <Route path="/map" element={<Map />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
