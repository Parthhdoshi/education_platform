import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Contact Us Header Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">
            Contact Us Today
          </h2>
          <p className="text-gray-600">
            Have Questions? Your Learning Journey Starts Here!
            <br />
            Connect with Us for Support, Feedback, or Assistance.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-blue-600 hover:opacity-75 text-xl">
              <i className="fab fa-facebook-f">FB</i>
            </a>
            <a href="#" className="text-blue-600 hover:opacity-75 text-xl">
              <i className="fab fa-twitter">TW</i>
            </a>
            <a href="#" className="text-blue-600 hover:opacity-75 text-xl">
              <i className="fab fa-youtube">YT</i>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-50 p-10 shadow-lg rounded-lg">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Form</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone number*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
              >
                Send Us a Message
              </button>
            </form>
          </div>

          {/* Additional Contact Information */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              Reach out to us via email or visit our social media channels for
              more information.
            </p>
            <ul className="space-y-2">
              <li className="text-gray-700">
                <strong>Email:</strong> minimalisticlearning2024@gmail.com
              </li>
              <li className="text-gray-700">
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li className="text-gray-700">
                <strong>Address:</strong> Alma Street,Coventry,England,UK
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-4">About us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Courses</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Help and Support</a></li>
                <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Terms</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm">&copy; 2024 Minimalistic Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
