import React, { use, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
//   const [isLoggedIn,setIsLoggedIn] = useState(true); // change to false to test login/register view
  const navigate = useNavigate();

  const {user,setUser,logout} = use(AuthContext);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };


  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        toast.success("Logout Successfully")
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 shadow-md w-full z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-sky-500">
            HobbyHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sky-500 font-medium">
              Home
            </Link>
            <Link to="/groups" className="text-sky-500 font-medium">
              All Groups
            </Link>

            <Link
              to="/groups/create"
              className="text-sky-500 font-medium"
            >
              Create Group{" "}
              <span className="text-xs text-red-400">(Private)</span>
            </Link>
            <Link to="/myGroups" className="text-sky-500 font-medium">
              My Groups <span className="text-xs text-red-400">(Private)</span>
            </Link>

            {!user ? (
              <>
                <Link to="/login" className="text-sky-500 hover:underline">
                  Login
                </Link>
                <Link
                  to="/register"
                  className=" text-sky-500 hover:underline"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3 group relative">
                <img
                  src={user?.photoURL}
                  alt="user"
                  className="w-9 h-9 rounded-full border-2 border-sky-400 hover:cursor-pointer"
                />
                <div className="absolute top-10 left-0 bg-white shadow px-3 py-1 rounded hidden group-hover:block dark:bg-gray-800">
                  <span className="text-sm text-gray-700 dark:text-white">
                    {user?.displayName}
                  </span>
                </div>
                <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded hover:cursor-pointer  hover:bg-red-700 transition">
                  Logout
                </button>
              </div>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-xl text-yellow-400 dark:text-white hover:cursor-pointer"
              title="Toggle Theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-3 hover:cursor-pointer">
            <button
              onClick={toggleTheme}
              className="text-xl text-yellow-400 dark:text-white"
              title="Toggle Theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
              {isOpen ? <FaTimes color="white" /> : <FaBars color="white"/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-sky-500 hover:underline">
              Home
            </Link>
            <Link
              to="/groups"
              onClick={() => setIsOpen(false)}
              className="block text-sky-500 hover:underline"
            >
              All Groups
            </Link>
            <Link
              to="/groups/create"
              onClick={() => setIsOpen(false)}
              className="block text-sky-500 hover:underline"
            >
              Create Group{" "}
              <span className="text-xs text-red-400">(Private)</span>
            </Link>
            <Link
              to="/myGroups"
              onClick={() => setIsOpen(false)}
              className="block text-sky-500 hover:underline"
            >
              My Groups <span className="text-xs text-red-400">(Private)</span>
            </Link>

            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-sky-500 hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block text-sky-500 hover:underline"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="w-9 h-9 rounded-full border-2 border-sky-400"
                  />
                  <span className="text-sm text-gray-700 dark:text-white">
                    {user.displayName}
                  </span>
                </div>
                <button className="text-red-500 hover:underline">Logout</button>
              </>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
