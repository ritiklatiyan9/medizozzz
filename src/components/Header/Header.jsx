import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBag, faInfoCircle, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 p-6 shadow-black shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://marketplace.canva.com/EAFw3t_qRH4/1/0/1600w/canva-blue-and-white-illustrative-doctor-health-care-logo-_jlmUZN8k7k.jpg"
              alt="Logo"
              className="h-14 rounded-full"
            />
          </Link>
        </div>
        <nav className="lg:flex hidden flex-grow justify-end">
          <ul className="flex space-x-6 text-white font-bold">
            <li>
              <Link
                to="/"
                className="hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/myProducts"
                className="hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                MyProducts
              </Link>
            </li>
            
            
            <li>
              <Link
                to="/about"
                className="hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-900">
          <ul className="flex flex-col space-y-4 text-white font-bold justify-end">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 hover:text-red-600 transition duration-300  "
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/myProducts"
                className="hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                MyProducts
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="block py-2 px-4 hover:text-red-600 transition duration-300"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 hover:text-red-600 transition duration-300"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-4 hover:text-red-600 transition duration-300"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
