import React from 'react';
import Lottie from "lottie-react";
import animationDataHeart from "../../assets/heart-logo.json";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=' bg-gradient-to-br from-blue-100 to-pink-300 bg-opacity-30'>
               <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
     className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-8 p-8 border shadow-2xl rounded-xl bg-gradient-to-br from-blue-100 to-pink-300 bg-opacity-30"

    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 ml-0 md:ml-20 text-center md:text-left  "
      >
        About Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:ml-20 mt-10">
        <div className="mb-4">
          <p className="text-lg md:text-2xl mb-4 font-bold">
            We are a medical facility provider company dedicated to providing high-quality medical services to our patients.
          </p>
          <p className="text-base md:text-lg text-gray-900 mb-4">
            Our team consists of highly trained healthcare professionals who are committed to delivering compassionate care and ensuring the well-being of our patients.
          </p>
          <p className="text-lg md:text-2xl font-bold text-purple-900">
            Our mission is to improve the health and quality of life of our patients through exceptional medical care and personalized attention.
          </p>
        </div>
        <div className="w-full md:w-6/12">
          <Lottie
            animationData={animationDataHeart}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
            }}
          />
        </div>
        <Link to="/Contact"> {/* Wrap the button with Link and provide the 'to' prop */}
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.2 }}
              className="bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-500 hover:bg-gradient-to-r hover:from-purple-700 hover:via-pink-500 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 w-full"
            >
              Connect With Us
            </motion.button>
          </Link>
        
      </div>
    </motion.div>
    </div>
   
  );
};

export default About;
