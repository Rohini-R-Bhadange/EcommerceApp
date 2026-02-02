import ProductCart from "../components/ProductCart";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate(); // ✅ ADD THIS

  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-6"
          >
            Welcome to ShopEase 🛒
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 mb-8"
          >
            Discover quality products at unbeatable prices
          </motion.p>

          {/* ✅ WORKING SHOP NOW BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/products")}   // ✅ IMPORTANT
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
          >
            Shop Now
          </motion.button>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((p) => (
            <ProductCart key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
