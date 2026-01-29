import React from "react";
import Navbar from "../components/Navbar";
import ProductCart from "../components/ProductCart";

const products = [
  { id: 1, title: "iPhone 14", price: 69999, image: "https://cdn-icons-png.flaticon.com/512/179/179457.png" },
  { id: 2, title: "Headphones", price: 1999, image: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png" },
  { id: 3, title: "Smart Watch", price: 2999, image: "https://cdn-icons-png.flaticon.com/512/847/847969.png" },
  { id: 4, title: "Laptop", price: 45999, image: "https://cdn-icons-png.flaticon.com/512/3474/3474362.png" },
];

const Products = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
