import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Optional: for advanced animations (requires install)

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      {/* Header */}
      <header className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between py-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
          Welcome to Ikkashin
        </h1>

        <div className="space-x-4">
          <Link to="/signup">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition duration-300 transform hover:scale-105">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Image or Hero */}
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src="https://imgs.search.brave.com/TQCYkG413GRnJEz1pQvIpFkhT9PZqAXuuA7rpK8S5_o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdHVk/ZW50cy1sb29raW5n/LWNvbXB1dGVyLW1v/bml0b3Itc2Nob29s/LWVkdWNhdGlvbi10/ZWNobm9sb2d5LWlu/dGVybmV0LWNvbmNl/cHQtNDAyNjQzMTcu/anBn"
        alt="Hero"
        className="w-full max-w-3xl rounded-2xl shadow-lg object-cover"
      />

      {/* Footer */}
      <footer className="text-sm text-gray-600 py-4">
        &copy; 2025 Ikkashin. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
