import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">ShopEase Admin</h1>

        <nav className="space-y-4">
          <NavLink to="/admin" className="block hover:bg-blue-500 p-2 rounded">Dashboard</NavLink>
          <NavLink to="/admin/create" className="block hover:bg-blue-500 p-2 rounded">Create Product</NavLink>
          <NavLink to="/admin/users" className="block hover:bg-blue-500 p-2 rounded">Users</NavLink>
          <NavLink to="/admin/orders" className="block hover:bg-blue-500 p-2 rounded">Orders</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
