import { useEffect, useState } from "react";
import { fetchProducts } from "../api/apis";
import ProductCard from "../components/ProductCart";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {products.map(p => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default Products;
