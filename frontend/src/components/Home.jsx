// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <motion.h1 
        className="text-5xl font-extrabold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to DisasterReady
      </motion.h1>

      <motion.div
        className="text-center text-white mb-8 max-w-4xl mx-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      >
        <p className="text-xl mb-4">
          <strong>Disasters</strong>, as defined by the United Nations, are serious disruptions of a community or society, involving widespread impacts that exceed the ability of the affected community to cope using its own resources. These disruptions can stem from natural or human origins, necessitating effective <strong>disaster management</strong> to mitigate their impacts.
        </p>
        <p className="text-lg">
          <strong>Disaster Management</strong> encompasses the strategies for preparing for, responding to, and recovering from disasters. It involves understanding hazards, vulnerabilities, and capacities to reduce the adverse effects on communities.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            Natural Disasters
          </motion.h2>
          <p className="text-gray-600">
            Natural Disasters include events like earthquakes, floods, and hurricanes that occur naturally and impact human health and safety. They can be geophysical, hydrological, climatological, meteorological, or biological.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            Man-Made Disasters
          </motion.h2>
          <p className="text-gray-600">
            Man-Made Disasters result from human actions and include environmental degradation, pollution, and accidents. These can lead to complex emergencies like food insecurity and armed conflicts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          >
            Pandemic Emergencies
          </motion.h2>
          <p className="text-gray-600">
            Pandemics are widespread outbreaks of infectious diseases that impact large populations and can disrupt health services and economies. Notable examples include Ebola, COVID-19, and avian flu.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          >
            Disaster Prevention
          </motion.h2>
          <p className="text-gray-600">
            Disaster Prevention involves activities to avoid or mitigate the impacts of hazards. It includes planning, risk management, and environmental design to reduce the risk of loss of life and property.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          >
            Disaster Preparedness
          </motion.h2>
          <p className="text-gray-600">
            Disaster Preparedness involves developing the knowledge and capacities needed to anticipate, respond to, and recover from disasters. It includes community-based management and planning to ensure resilience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          >
            Disaster Response / Relief
          </motion.h2>
          <p className="text-gray-600">
            Disaster Response focuses on providing immediate assistance to save lives, ensure public safety, and meet basic needs during or immediately after a disaster. It involves rescue, relocation, and temporary relief services.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          >
            Disaster Recovery
          </motion.h2>
          <p className="text-gray-600">
            Disaster Recovery involves long-term efforts to rebuild infrastructure, provide health care, and support development activities to restore normalcy and resilience in affected communities.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
