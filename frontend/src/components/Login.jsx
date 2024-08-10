import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-r from-blue-400 to-purple-600 p-6">
      {/* Left Side - Project Information */}
      <div className="w-1/2 text-white p-8">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Welcome to DisasterReady
        </motion.h1>
        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Your Partner in Disaster Preparedness
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          Enhance your readiness with our intuitive platform designed to empower communities. Access reliable information, plan for emergencies, and connect with essential resources when it matters most.
        </motion.p>
        <motion.button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
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
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
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
            Login
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <motion.input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-300"
                whileFocus={{ scale: 1.05, borderColor: "#3b82f6", boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                required
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <motion.input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-300"
                whileFocus={{ scale: 1.05, borderColor: "#3b82f6", boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </form>
          <motion.p 
            className="text-center text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
