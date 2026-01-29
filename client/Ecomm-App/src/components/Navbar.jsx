import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-2xl font-bold text-blue-600">ShopEase</h1>

        <ul className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
