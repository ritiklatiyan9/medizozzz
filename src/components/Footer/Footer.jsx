import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MediCozzz. All Rights Reserved.
        </p>
        
       
        <p className="text-sm mt-2">
          Designed with care by <a href="#" className="underline">Synapse Forge</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
