"use client";{/*started by sunny*/}

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#BFDBFE] py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-600 font-semibold text-lg md:text-xl">
          <span className="tracking-wider">MINIMALISTIC LEARNING</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="/#" className="hover:text-blue-600 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/aboutus" className="hover:text-blue-600 transition duration-300">
              About
            </a>
          </li>
          <li>
<<<<<<< HEAD
            <a href="/courses" className="hover:text-blue-600 transition duration-300">
=======
            <a href="/course" className="hover:text-blue-600 transition duration-300">
>>>>>>> 2b7091864aada4f1dcbc3e78d561e1e5b415e4e3
              Courses
            </a>
          </li>
           {/* Mahesh start */}
          <li>
<<<<<<< HEAD
<<<<<<< HEAD
            <a href="/contactus" className="hover:text-blue-600 transition duration-300">
=======
            <a href="/aboutus" className="hover:text-blue-600 transition duration-300">
>>>>>>> 6cea5ae56d2b9256c147b16792d07250fe84fa08
=======
            <a href="/Contactus" className="hover:text-blue-600 transition duration-300">
>>>>>>> 2b7091864aada4f1dcbc3e78d561e1e5b415e4e3
              Contact Us
            </a>
          </li>
          {/* Mahesh end */}
        </ul>
      

        {/* Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
<<<<<<< HEAD
            href="http://localhost:3000/signin#signup"
=======
            href="/signin#signup"
>>>>>>> 6cea5ae56d2b9256c147b16792d07250fe84fa08
            className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
          >
            Sign up
          </a>
          <a
<<<<<<< HEAD
            href="http://localhost:3000/signin"
=======
            href="/signin#signin"
>>>>>>> 6cea5ae56d2b9256c147b16792d07250fe84fa08
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Log in
          </a>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden z-10">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
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
          {isOpen && (
            //<div className="fixed top-0 left-0 h-full w-full bg-white p-4 shadow-md overflow-x-hidden overflow-y-scroll" style={{ height: '100vh', overflowY: 'scroll' }}></div>
            <div className="fixed top-0 left-0 h-[90%] w-full bg-white p-4 shadow-md overflow-x-hidden">
              <div className="text-blue-600 font-semibold text-lg md:text-xl pb-2">
                <span className="tracking-wider">MINIMALISTIC LEARNING</span>
              </div>
              <button
                className="absolute top-4 right-4 text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                {/* Close Button */}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-600 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
<<<<<<< HEAD
                    href="/aboutus"
=======
                    href="/about"
>>>>>>> 6cea5ae56d2b9256c147b16792d07250fe84fa08
                    className="hover:text-blue-600 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="hover:text-blue-600 transition duration-300"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
<<<<<<< HEAD
<<<<<<< HEAD
                    href="contactus"
=======
                    href="/contactus"
>>>>>>> 6cea5ae56d2b9256c147b16792d07250fe84fa08
=======
                    href="/Contactus"
>>>>>>> 2b7091864aada4f1dcbc3e78d561e1e5b415e4e3
                    className="hover:text-blue-600 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
{/*ended by sunny*/}