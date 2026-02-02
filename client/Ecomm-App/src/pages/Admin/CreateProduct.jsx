import { useState } from "react";
import { createProduct } from "../../api/apis";
import { FiTag, FiImage, FiFileText, FiLayers } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";

const CreateProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await createProduct(form);
      alert("✅ Product Added Successfully");

      setForm({
        title: "",
        price: "",
        image: "",
        description: "",
        category: "",
      });
    } catch (error) {
      alert("❌ Error adding product");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      
      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-5">
        <h1 className="text-2xl font-bold">Create New Product</h1>
        <p className="text-sm opacity-90">
          Add products to your ShopEase store
        </p>
      </div>

      {/* FORM */}
      <div className="p-6 space-y-4">

        {/* TITLE */}
        <div className="relative">
          <FiTag className="absolute left-3 top-3 text-gray-400" />
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* PRICE */}
        <div className="relative">
          <MdCurrencyRupee className="absolute left-3 top-3 text-gray-400" />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            type="number"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* IMAGE */}
        <div className="relative">
          <FiImage className="absolute left-3 top-3 text-gray-400" />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* CATEGORY */}
        <div className="relative">
          <FiLayers className="absolute left-3 top-3 text-gray-400" />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="mobiles">Mobiles & Accessories</option>
            <option value="laptops">Laptops & Computers</option>
            <option value="clothes">Clothes / Fashion</option>
            <option value="shoes">Shoes</option>
            <option value="beauty">Beauty & Personal Care</option>
            <option value="health">Health & Wellness</option>
            <option value="grocery">Grocery</option>
            <option value="kitchen">Kitchen & Dining</option>
            <option value="furniture">Furniture</option>
            <option value="home-decor">Home Decor</option>
            <option value="books">Books & Stationery</option>
            <option value="sports">Sports & Fitness</option>
            <option value="toys">Toys & Baby Products</option>
            <option value="bags">Bags & Luggage</option>
            <option value="watches">Watches & Accessories</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div className="relative">
          <FiFileText className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows="4"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition-transform shadow-md"
        >
          ➕ Add Product
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
