import React, { useState, useEffect, use } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Dark mode with localStorage + system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const navigate = useNavigate();
  const { user, setUser, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        toast.success("Logout Successfully");
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
          <NavLink to="/" className="text-2xl font-bold text-sky-500">
            HobbyHub
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="text-sky-500 font-medium">
              Home
            </NavLink>
            <NavLink to="/allGroups" className="text-sky-500 font-medium">
              All Groups
            </NavLink>
            <NavLink to="/groups/create" className="text-sky-500 font-medium">
              Create Group{" "}
              <span className="text-xs text-red-400">(Private)</span>
            </NavLink>
            <NavLink to="/myGroups" className="text-sky-500 font-medium">
              My Groups <span className="text-xs text-red-400">(Private)</span>
            </NavLink>

            {!user ? (
              <>
                <NavLink to="/login" className="text-sky-500 hover:underline">
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-sky-500 hover:underline"
                >
                  Register
                </NavLink>
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
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
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
              {darkMode ? <FaSun /> : <FaMoon color="black" />}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-3 hover:cursor-pointer">
            <button
              onClick={toggleTheme}
              className="text-xl text-yellow-400 dark:text-white"
              title="Toggle Theme"
            >
              {darkMode ? <FaSun /> : <FaMoon color="black" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
              {isOpen ? <FaTimes className="text-sky-500" /> : <FaBars className="text-sky-500" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-sky-500 hover:underline"
            >
              Home
            </NavLink>
            <NavLink
              to="/allGroups"
              onClick={() => setIsOpen(false)}
              className="block text-sky-500 hover:underline"
            >
              All Groups
            </NavLink>
            <NavLink
              to="/groups/create"
              onClick={() => setIsOpen(false)}
              className="block text-sky-500 hover:underline"
            >
              Create Group
            </NavLink>
            <NavLink
              to="/myGroups"
              onClick={() => setIsOpen(false)}
              className="block text-sky-500 hover:underline"
            >
              My Groups
            </NavLink>

            {!user ? (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-sky-500 hover:underline"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block text-sky-500 hover:underline"
                >
                  Register
                </NavLink>
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
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:underline"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
