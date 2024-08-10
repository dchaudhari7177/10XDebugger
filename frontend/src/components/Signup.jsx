import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User signed up:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-r from-green-400 to-blue-600 p-6">
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
        <motion.p 
          className="text-lg mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Join us in revolutionizing disaster preparedness with our platform that equips you with tools and resources to stay safe and connected during emergencies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xl font-semibold mb-2">Why Choose Us?</p>
          <ul className="list-disc ml-6 space-y-2">
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            >
              <span className="font-semibold">Real-time Alerts:</span> Get accurate and timely information during crises.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            >
              <span className="font-semibold">Resource Management:</span> Efficiently manage your resources and supplies.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            >
              <span className="font-semibold">Community Support:</span> Connect with others for support and assistance.
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/2 flex justify-end pr-12">
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-800 mb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            Sign Up
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <motion.input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400 transition duration-300"
                whileFocus={{ scale: 1.05, borderColor: "#34d399", boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)" }}
                required
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <motion.input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400 transition duration-300"
                whileFocus={{ scale: 1.05, borderColor: "#34d399", boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)" }}
                required
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <motion.input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400 transition duration-300"
                whileFocus={{ scale: 1.05, borderColor: "#34d399", boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)" }}
                required
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
              <motion.input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400 transition duration-300"
                whileFocus={{ scale: 1.05, borderColor: "#34d399", boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)" }}
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </form>
          <motion.p 
            className="text-center text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            Already have an account?{' '}
            <a href="/login" className="text-green-500 hover:underline">Login</a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
