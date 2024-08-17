import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import animationDataLetter from "../../assets/conntact-letter.json";

const Contact = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle the form visibility

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Construct WhatsApp message URL
    const phoneNumber = "8869883042"; // Your WhatsApp number
    const whatsappMessage = `Hello! My name is ${name}. My email is ${email}. My message is: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect user to WhatsApp with pre-filled message
    return window.location.href = whatsappURL;
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-pink-300 bg-opacity-30 min-h-screen flex flex-col md:flex-row justify-center items-center p-8 ">
      <div className="w-full md:w-1/2">
        <Lottie
          animationData={animationDataLetter}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="bg-gradient-to-br from-blue-200 to-pink-400 bg-opacity-30 rounded-xl shadow-md p-4 w-full md:max-w-lg lg:max-w-xl border-purple-300 mb-8 md:mb-0 md:mr-8"
      >
        <h1 className="text-3xl md:text-5xl  font-bold text-center mb-8 text-black">Contact Us</h1>
        {showForm && (
          <div className="max-w-lg mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="space-y-4 "
              onSubmit={handleSubmit} // Call the handleSubmit function when the form is submitted
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Name</label>
                <input type="text" id="name" name="name" className="w-full md:w-96 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-purple-500 transition duration-300 shadow-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
                <input type="email" id="email" name="email" className="w-full md:w-96 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-purple-500 transition duration-300 shadow-md" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800">Message</label>
                <textarea id="message" name="message" rows="5" className="w-full md:w-96 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-purple-500 transition duration-300 shadow-md"></textarea>
              </div>
              <div className="flex justify-center">
                <motion.button type="submit"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.2 }}
                  className="bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-500 hover:bg-gradient-to-r hover:from-purple-700 hover:via-pink-500 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 w-full"
                >
                  Submit
                </motion.button>
              </div>
            </motion.form>
          </div>
        )}
        {!showForm && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setShowForm(true)} // Set showForm to true when the button is clicked
            className="bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-500 hover:bg-gradient-to-r hover:from-purple-700 hover:via-pink-500 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 w-full"
          >
            Click to Connect with Us
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;