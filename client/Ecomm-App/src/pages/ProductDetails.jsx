import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      setProduct(res.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-blue-600 text-2xl font-semibold">
            ₹{product.price}
          </p>

          <p className="text-gray-600">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate("/products")}
              className="border px-6 py-3 rounded-xl"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
