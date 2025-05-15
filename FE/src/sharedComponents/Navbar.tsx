import { Link } from "react-router";
import { routes } from "src/pages/routes";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">
            Boring To Do App
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              className="text-gray-700 hover:text-blue-600 transition"
              to={routes.home}
            >
              Home
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 transition"
              to={routes.login}
            >
              Login
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 transition"
              to={routes.logout}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
