import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCart from "../components/ProductCart";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "iPhone 14",
    price: 69999,
    image: "https://cdn-icons-png.flaticon.com/512/179/179457.png",
  },
  {
    id: 2,
    title: "Headphones",
    price: 1999,
    image: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 2999,
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-4xl font-bold"
        >
          Welcome to ShopEase 🛒
        </motion.h1>
        <p className="mt-4">Best products at best prices</p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCart key={item.id} product={item} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
