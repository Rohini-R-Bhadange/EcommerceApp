import { useEffect, useState } from "react";
import { fetchOrders } from "../../api/apis";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-xl font-bold mb-4">Orders</h1>

      {orders.length === 0 ? (
        <p>No orders placed yet</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="border p-4 rounded mb-4"
          >
            <p>
              <b>Order ID:</b> {order._id}
            </p>

            <p>
              <b>User:</b>{" "}
              {order.user.firstName} {order.user.lastName}
            </p>

            <p>
              <b>Total:</b> ₹{order.totalAmount}
            </p>

            <p>
              <b>Payment Status:</b> {order.paymentStatus}
            </p>

            <p className="text-sm text-gray-500">
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
