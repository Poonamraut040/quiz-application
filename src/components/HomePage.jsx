import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"
    style = {{
        backgroundImage: `url(${"/quiz5.jpeg"})`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        
      }}>
      {/* Navbar */}
      <nav className="w-full bg-[#004687] shadow-md fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-3xl font-bold text-white">
            Quizzz
          </div>
          {/* Navigation Links */}
          <div className="space-x-20">
            <Link to="/signup" className="text-white hover:underline text-xl font-medium">
              Signup
            </Link>
            <Link to="/login" className="text-white hover:underline text-xl font-medium">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex flex-col justify-center items-center text-center mt-30 space-y-4">
        {/* Big Heading */}
        <h1 className="text-6xl font-extrabold text-[#002D62]">Ready to start a quiz?</h1>
        {/* Subheading */}
        <p className="text-lg font-bold text-black">"Believe in your potential and tackle each question with confidence."</p>

        {/* Button to Sign Up */}
        <Link to="/signup">
          <button className="mt-6 px-8 py-3 bg-[#002D62] text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
