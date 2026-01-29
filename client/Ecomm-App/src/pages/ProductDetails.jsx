import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();

  // Dummy product
  const product = {
    title: "iPhone 14",
    price: 69999,
    description: "Powerful performance, amazing camera, and stylish design.",
    image: "https://cdn-icons-png.flaticon.com/512/179/179457.png",
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          src={product.image}
          className="w-full h-80 object-contain"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-blue-600 font-semibold mt-2">₹{product.price}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default ProductDetails;
