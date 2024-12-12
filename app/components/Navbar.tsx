"use client";

const Navbar = () => {
  return (
    <nav className="bg-[#E7F4FF] py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-600 font-semibold text-lg md:text-xl">
          <span className="tracking-wider">MINIMALISTIC LEARNING</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
          >
            Sign up
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Log in
          </a>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            {/* Hamburger Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
