import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import animationData from "../../assets/doctor-animation.json";
import animationData2 from "../../assets/cycle.json";




function Home() {
 
  const Card = ({ imageSrc, title , id }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const controls = useAnimation();

    const handleClick = async () => {
      setIsZoomed(!isZoomed);
      await controls.start(isZoomed ? { scale: 1 } : { scale: 1.1 });
    };

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={handleClick}
        className="relative bg-white rounded-lg  shadow-lg overflow-hidden"
        animate={controls}
      > 
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-black">
                  
        </div>
        <h2 className="text-lg font-bold p-2 ">{title}</h2>
      </motion.div>
    );
  };

  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp6904254.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 backdrop-blur-xl"></div>
        <div className="relative flex flex-col items-center justify-center min-h-screen z-10">
          <motion.h1
            className="font-bold text-6xl md:text-8xl text-gray-100 shadow-red-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            MediCozzz
          </motion.h1>

          <motion.div
            className="flex flex-col items-center md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <h4 className="font-bold text-lg md:text-4xl">
              "Empowering Health,
            </h4>
            <p className="text-green-900 text-shadow-black font-bold text-lg md:text-4xl ml-0 md:ml-1">
              Enriching Lives"
            </p>
          </motion.div>
          <motion.p
            className="font-bold text-lg md:text-2xl mt-5 md:mt-10 text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          >
            Your Trusted Partner in Medical Excellence.
          </motion.p>

          <div className="w-full max-w-lg md:max-w-3xl mt-10">
            <Lottie animationData={animationData} />
          </div>

          <div className="fixed bottom-0 right-0 mr-10 mb-20">
            <a href="https://wa.me/8869883042">
              <FontAwesomeIcon icon={faWhatsapp} className="h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-yellow-50 to-purple-300 bg-opacity-10  backdrop-blur-xl">
        <motion.h1
          className="font-bold text-4xl md:text-6xl mx-4 md:ml-20 md:mr-0 p-2 md:p-4 text-gray-900 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Our Proud <p className="text-green-500 ml-24">Trade</p>
        </motion.h1>

        <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 ">
          <Card
            imageSrc="https://etimg.etb2bimg.com/photo/98744864.cms"
            title="Medical Stores"
            
          />
          <Card
            imageSrc="https://www.inventiva.co.in/wp-content/uploads/2020/05/How-Can-CRM-Solutions-Improve-the-Healthcare-Industry-780x456.jpg"
            title="Scientific Reasearches"
            
          />
          <Card
            imageSrc="https://proventainternational.com/wp-content/uploads/2021/06/The-structure-departments-of-pharmaceutical-manufacturing-companies.jpg"
            title="Laboratories"
            
          />
          <Card
            imageSrc="https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg"
            title="Professionals"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-gradient-to-br from-red-200 to-cyan-200 bg-opacity-10">
  <div className="md:w-6/12 md:order-2 p-4">
    <motion.div
      className="w-full max-w-lg md:max-w-3xl mt-10 overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Lottie
        animationData={animationData2}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </motion.div>
  </div>

  <div className="md:w-6/12 md:order-1 mr-12">
    <motion.div
      className="w-full mt-20 md:w-11/12 m-6 bg-gray-100 p-8 font-bold rounded-xl shadow-md bg-gradient-to-br from-blue-100 to-pink-300 bg-opacity-30"
      initial={{ opacity: 0, y: 100 }} // Start from below with opacity 0
      animate={{ opacity: 1, y: 0 }} // Move up and fade in
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-md mb-4">Healthy Environment Importance</h2>
      <p className="text-lg">
        A healthy environment is crucial for promoting overall health and well-being. Clean air, water, and surroundings are essential for preventing diseases, maintaining vitality, and enhancing quality of life. A pollution-free environment reduces the risk of respiratory issues, allergies, and other health complications.
      </p>
    </motion.div>
  </div>
</div>

 
     
    </>
    
  );
}


export default Home;
