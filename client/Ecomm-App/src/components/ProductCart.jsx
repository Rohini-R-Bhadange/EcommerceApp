import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-xl p-4"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain cursor-pointer"
        />
        <h2 className="font-semibold mt-2">{product.title}</h2>
      </Link>

      <p className="text-blue-600 font-bold">₹{product.price}</p>

      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCart;
