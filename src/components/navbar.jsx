import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">MyBlog</h1>

      <div className="space-x-6">
        <Link
          to="/"
          className="hover:text-gray-300 transition"
        >
          Home
        </Link>

        <Link
          to="/add"
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition"
        >
          Add Blog
        </Link>
      </div>
    </nav>
  );
}