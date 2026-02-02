import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCart = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <div className="h-48 bg-slate-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-36 object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-blue-600 font-bold text-xl">₹{product.price}</p>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${product._id}`}   // ✅ FIXED
            className="flex-1 text-center border py-2 rounded-xl"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
