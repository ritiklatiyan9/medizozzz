import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, quantityProduct } from "../../Features/todo/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import animationData2 from "../../assets/cart.json";
import { Link } from "react-router-dom";

const MyProductsPage = () => {
  const myProducts = useSelector((state) => state.MedicalSlice.myProducts);
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(quantityProduct({ id: productId, quantity }));
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-pink-50 to-purple-300 p-8 min-h-screen">
      <h1 className="text-6xl ml-6 font-bold text-green-900 mb-4 typewriter">
        My Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Lottie
          animationData={animationData2}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        />
        {myProducts.map((product) => (
          <div key={product.id} className="w-full p-4">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:transition-transform hover:duration-300 ease-in-out">
              <FontAwesomeIcon
                icon={faTimes}
                className="absolute top-2 right-2 text-red-500 cursor-pointer"
                onClick={() => handleRemoveProduct(product.id)}
              />
              <img
                className="w-full h-48 object-cover p-6"
                src={product.image}
                alt={product.name}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <h2 className="text-lg font-semibold">{product.price}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="p-4">
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    className="bg-gray-200 rounded-md"
                    onChange={(e) =>
                      handleQuantityChange(product.id, e.target.value)
                    }
                  />{" "}
                  <br />
                  <label htmlFor="" class="flex items-center">
                    <span class="text-md font-medium mr-2">
                      Confirm Your Order
                    </span>
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>
                </div>
                <Link
                  to="/payment"
                  className="hover:text-red-600 transition duration-300"
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className=" bg-gradient-to-r from-green-900 to-green-400 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Buy Product
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProductsPage;
