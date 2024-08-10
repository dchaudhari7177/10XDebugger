import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admin login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-r from-orange-400 to-orange-600 p-6">
      {/* Left Side - Project Information */}
      <div className="w-1/2 text-white p-8">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Admin Dashboard
        </motion.h1>
        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Manage DisasterReady Operations
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          As an admin, you have the authority to oversee and manage platform operations, user accounts, and system settings. Log in to access the administrative panel and perform essential tasks to ensure effective platform management.
        </motion.p>
        <motion.button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          Learn More
        </motion.button>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex justify-end pr-12">
        <motion.div 
          className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-800 mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            Admin Login
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <motion.input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-500 transition duration-300"
                whileFocus={{ scale: 1.05, borderColor: "#f97316", boxShadow: "0 0 10px rgba(249, 115, 29, 0.5)" }}
                required
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <motion.input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-500 transition duration-300"
                whileFocus={{ scale: 1.05, borderColor: "#f97316", boxShadow: "0 0 10px rgba(249, 115, 29, 0.5)" }}
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </form>
          <motion.p 
            className="text-center text-gray-600 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Need an account?{' '}
            <a href="/Admin-signup" className="text-blue-600 hover:underline">Sign up</a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
