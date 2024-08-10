import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">DisasterReady</Link>
        <div className="flex items-center">
          <Link
            to="/Home"
            className="px-4 py-2 hover:bg-blue-700 rounded-lg"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setLoginDropdownOpen(true)}
            onMouseLeave={() => setLoginDropdownOpen(false)}
          >
            <Link
              to="#"
              className="px-4 py-2 hover:bg-blue-700 rounded-lg"
            >
              Login
            </Link>
            {loginDropdownOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-blue-700 text-white rounded-lg shadow-lg">
                <Link
                  to="/Admin-login"
                  className="block px-4 py-2 hover:bg-blue-800 rounded-lg"
                >
                  Admin Login
                </Link>
                <Link
                  to="/General-login"
                  className="block px-4 py-2 hover:bg-blue-800 rounded-lg"
                >
                  General Login
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative ml-4"
            onMouseEnter={() => setSignupDropdownOpen(true)}
            onMouseLeave={() => setSignupDropdownOpen(false)}
          >
            <Link
              to="#"
              className="px-4 py-2 hover:bg-blue-700 rounded-lg"
            >
              Signup
            </Link>
            {signupDropdownOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-blue-700 text-white rounded-lg shadow-lg">
                <Link
                  to="/Admin-signup"
                  className="block px-4 py-2 hover:bg-blue-800 rounded-lg"
                >
                  Admin Signup
                </Link>
                <Link
                  to="/General-signup"
                  className="block px-4 py-2 hover:bg-blue-800 rounded-lg"
                >
                  General Signup
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/map"
            className="px-4 py-2 hover:bg-blue-700 rounded-lg ml-4"
          >
            Map
          </Link>
          <Link
            to="/weather"
            className="px-4 py-2 hover:bg-blue-700 rounded-lg ml-4"
          >
            Weather
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
