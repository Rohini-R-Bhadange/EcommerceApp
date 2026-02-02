import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
  });

  useEffect(() => {
    const load = async () => {
      const users = await axios.get("http://localhost:3000/api/users");
      const products = await axios.get("http://localhost:3000/api/products");

      setStats({
        users: users.data.length,
        products: products.data.length,
      });
    };
    load();
  }, []);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Overview of your ShopEase store
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* USERS CARD */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">
                Total Users
              </p>
              <h2 className="text-4xl font-bold mt-2">
                {stats.users}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-full text-2xl">
              👤
            </div>
          </div>
        </div>

        {/* PRODUCTS CARD */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">
                Total Products
              </p>
              <h2 className="text-4xl font-bold mt-2">
                {stats.products}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-full text-2xl">
              📦
            </div>
          </div>
        </div>
      </div>

      {/* QUICK INFO */}
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">
          Store Summary
        </h3>
        <p className="text-gray-600">
          You currently have{" "}
          <b>{stats.users}</b> registered users and{" "}
          <b>{stats.products}</b> active products in your store.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
