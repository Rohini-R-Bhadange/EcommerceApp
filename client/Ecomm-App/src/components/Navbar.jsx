import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">ShopEase</Link>
        </h1>

        <div className="flex gap-6 items-center font-medium">
          <Link className="hover:text-blue-600 transition" to="/">Home</Link>
          <Link className="hover:text-blue-600 transition" to="/products">Products</Link>
          <Link className="hover:text-blue-600 transition" to="/cart">Cart</Link>

          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="text-purple-600 font-semibold hover:underline"
            >
              Admin
            </Link>
          )}

          {!user ? (
            <Link
              to="/login"
              className="px-4 py-1.5 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-500 font-semibold hover:underline"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
