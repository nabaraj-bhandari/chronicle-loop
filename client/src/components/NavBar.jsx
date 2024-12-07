import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">Chronicle Loop</a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="/articles" className="text-gray-600 hover:text-blue-600">
              Articles
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-600 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="/settings" className="text-gray-600 hover:text-blue-600">
              Settings
            </a>
          </li>
        </ul>

        {/* Account Section */}
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-gray-600 hover:text-blue-600">
            Login
          </a>
          <a
            href="/signup"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
