import React from "react";
import Navbar from "../components/Navbar";

const Cart = () => {
  const cartItems = [
    { id: 1, title: "iPhone 14", price: 69999 },
    { id: 2, title: "Headphones", price: 1999 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow p-4 rounded mb-4"
          >
            <h2>{item.title}</h2>
            <p className="font-semibold">₹{item.price}</p>
          </div>
        ))}

        <div className="text-right mt-6">
          <h2 className="text-xl font-bold">Total: ₹{total}</h2>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
