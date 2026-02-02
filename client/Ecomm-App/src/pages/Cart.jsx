import { useCart } from "../context/CartContext";
import { createOrder } from "../api/apis";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = async () => {
    if (!user) {
      alert("Please login to place an order");
      return;
    }

    const orderItems = cartItems.map((item) => ({
      product: item._id,
      qty: item.qty,
      price: item.price,
    }));

    try {
      await createOrder({
        userId: user.id,
        items: orderItems,
        totalAmount: total,
      });

      alert("Order placed successfully 🎉");
      // (Later we will clear cart & redirect)
    } catch (error) {
      alert("Failed to place order");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center bg-white shadow p-4 mb-4 rounded-xl"
        >
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p>Qty: {item.qty}</p>
          </div>

          <div className="flex items-center gap-6">
            <p className="font-bold">
              ₹{item.price * item.qty}
            </p>

            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-bold text-right mt-6">
        Total: ₹{total}
      </h2>

      {/* ✅ NEW CHECKOUT BUTTON */}
      <div className="text-right mt-4">
        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
