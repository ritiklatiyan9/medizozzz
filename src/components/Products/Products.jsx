import React, { useState } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/todo/todoSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData2 from "../../assets/check.json";
import {  toast } from 'react-toastify';

 const notify=()=>{
  toast("Added to cart Successfully !")
 }

const ProductCard = ({
  product,
  isExpanded,
  toggleExpand,
  addToCartHandler,
}) => {
  return (
    <div className="w-full md:w-80 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          className="w-full h-48 object-cover p-2"
          src={product.image}
          alt={product.name}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <h2 className="text-lg font-semibold">{product.price}</h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-4 flex items-center">
            <button
              onClick={toggleExpand}
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              {isExpanded ? <FaEyeSlash /> : <FaEye />}
            </button>
            <p className="font-semibold ml-2">View Product</p>
          </div>
          {isExpanded && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Full Information</h3>
              <p className="p-2">{product.fullInfo}</p>




              <motion.button
                whileTap={{ scale: 0.95 }} // Define the scale effect when the button is tapped
                onClick={() => addToCartHandler(product)}
                className="bg-gradient-to-r from-green-900 to-green-400 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add To Cart
              </motion.button>



              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const dispatch = useDispatch();
  
  const addToCartHandler = (product) => {
    notify();
    dispatch(addToCart(product));
  };

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const products = [
    { 
      id: nanoid(),
      name: "Levagenarode Tablets",
      price:"₹899",
      description: "Paracetamol 500mg",
      fullInfo:
        "Paracetamol, also known as acetaminophen, is a commonly used medication for relieving pain and reducing fever. It is widely available over-the-counter and is often found in various formulations, including tablets, capsules.",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
    },
    { 
      id: nanoid(),
      name: "Vitamix Capsules",
      price:"₹399",
      description: "Multivitamin Supplement",
      fullInfo:
        "Vitamix Capsules provide essential vitamins and minerals to support overall health and well-being. These multivitamin supplements are formulated to fill in nutritional gaps and promote vitality.",
      image:
        "https://kauveryhospital.com/blog/wp-content/uploads/2022/02/Top-signs-of-Vitamin-Deficiency.jpg",
    },
    { 
      id: nanoid(),
      name: "RelaxaTea Herbal Blend",
      price:"₹999",
      description: "Chamomile & Lavender Tea",
      fullInfo:
        "RelaxaTea Herbal Blend is a soothing infusion of chamomile and lavender, carefully crafted to promote relaxation and calmness. Enjoy a cup of this aromatic tea to unwind after a busy day.",
      image:
        "https://s.yimg.com/ny/api/res/1.2/dNbFUbnFIwqdI88NV6BPlg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMjAw/https://media.zenfs.com/en/mediaoutreach_175/ebb69c5b9fbe74de5d6a5b02388303c0",
    },
    {
      id: nanoid(),
      name: "ReviveX Energy Drink",
      price:"₹799",
      description: "Mixed Berry Flavor",
      fullInfo:
        "ReviveX Energy Drink is a refreshing beverage infused with essential vitamins and natural extracts to provide a boost of energy and mental alertness. Enjoy the invigorating taste of mixed berries while staying hydrated throughout the day.",
      image:
        "https://i.guim.co.uk/img/media/2e53cf0c9354a8aed4ddf1fbd91e5b0e472d8b1e/0_179_5374_3225/master/5374.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5353fd5383458aa09f0810253003b221",
    },
    {
      id: nanoid(),
      name: "Organic Superfood Blend",
      price:"₹99",
      description: "Nutrient-Rich Powder",
      fullInfo:
        "Organic Superfood Blend is a powerful combination of nutrient-rich ingredients, including spirulina, chlorella, wheatgrass, and more. This powdered supplement provides a convenient way to boost your daily intake of vitamins, minerals, and antioxidants.",
      image:
        "https://m.media-amazon.com/images/I/6119AE2XJHL.jpg",
    },
    {
      id: nanoid(),
      name: "ZenVibes Goods",
      price:"₹999",
      description: " Buckwheat Filled Cushion",
      fullInfo:
        "ZenVibes Meditation Machine provides comfortable support during meditation and yoga practices.",
      image:
        "https://m.media-amazon.com/images/I/71kU77B-63L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: nanoid(),
      name: "FreshFusion Fruit Infuser Bottle",
      price:"₹199",
      description: "BPA-Free Water Bottle",
      fullInfo:
        "FreshFusion Fruit Infuser Bottle allows you to enjoy naturally flavored water on-the-go. Simply add your favorite fruits, herbs, or vegetables to the infuser compartment and let the flavors infuse into your water for a refreshing and healthy hydration option.",
      image:
        "https://images-cdn.ubuy.co.in/65643d06ac8b2a12ea2d9d76-fruit-infuser-water-bottle-imountek-32.jpg",
    },
  ];

  return (
    <div className="container mx-auto bg-gradient-to-r from-pink-50 to-purple-300 p-8">
      <h1 className="text-6xl font-bold text-green-900 mb-4 typewriter w-full text-center">
        Products
      </h1>
      <div className="w-full flex justify-center mb-2">
        <Lottie
          className="w-40"
          animationData={animationData2}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            isExpanded={expandedIndex === index}
            toggleExpand={() => toggleExpand(index)}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
