"use client";/*started by sadashiv*/
import React, { useState } from "react";
import TutorProfile from "../components/TutorProfile";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Course = () => {
  const categories = ["All Courses", "Business", "Science & Technology", "Arts & Humanities", "Health"];
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const courses = [
    {
      title: "Introduction to Public Health",
      category: "Health",
      description: "Explore the basics of public health, including strategies for well-being.",
      img: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 3,
    },
    {
      title: "Creative Writing Workshop",
      category: "Art & Humanities",
      description: "Master the art of storytelling, poetry, and other forms of creative writing.",
      img: "https://th.bing.com/th/id/OIP.leDvRKEwWLP16MFtVHXoWAHaEi?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      rating: 4,
    },
    {
      title: "Basics of Coding: Python for Beginners",
      category: "Science & Technology",
      description: "Start your journey in programming with easy-to-follow Python lessons.",
      img: "https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
    },
    {
      title: "Introduction to Public Health",
      category: "Health",
      description: "Explore the basics of public health, including strategies for well-being.",
      img: "https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 3,
    },
    {
      title: "Creative Writing Workshop",
      category: "Arts & Humanities",
      description: "Master the art of storytelling, poetry, and other forms of creative writing.",
      img: "https://images.pexels.com/photos/5598301/pexels-photo-5598301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
    },
    {
      title: "Basics of Coding: Python for Beginners",
      category: "Science & Technology",
      description: "Start your journey in programming with easy-to-follow Python lessons.",
      img: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
    },
  ];

  const filteredCourses = activeCategory === "All Courses"
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 my-6 px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1.5 text-sm font-medium transition whitespace-nowrap ${
              activeCategory === category
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col h-[200px]">
                <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{course.description}</p>

                <div className="flex-grow"></div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < course.rating ? "text-yellow-500" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>

                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
                    Browse Certification
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No courses available in this category.</p>
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-[#daf0ff] text-gray-800">
      <section className="text-center py-8 sm:py-16 bg-[#daf0ff] px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold">Learn Anytime, Anywhere</h1>
        <p className="text-base sm:text-lg mt-2">Learn Grow Succeed—Your Next Skill Starts Here</p>
        <input
          type="text"
          placeholder="Search courses..."
          className="mt-4 px-4 py-2 border rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        />
      </section>

      <Course />

      <section className="px-4 sm:px-10 py-8 sm:py-10 bg-[#daf0ff]">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Customize Your Learning Path
        </h2>
        <p className="text-base sm:text-lg mt-2 text-center"> Choose Three Topics To Create Minimalistic Learning Experience</p>

        <textarea
          placeholder="Search topics..."
          className="h-8 w-full sm:w-2/3 md:w-1/2 p-0.5 m-1 border rounded-lg mx-auto block"
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {[
            { img  : "https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Artificial Intelligence" },
            { img: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Digital Marketing" },
            { img: "https://images.pexels.com/photos/8919548/pexels-photo-8919548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Finance & Investing" },
            { img: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Photography" },
            { img: "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Artificial Intelligence" },
            { img: "https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Digital Marketing" },
            { img: "https://images.pexels.com/photos/8370389/pexels-photo-8370389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Finance & Investing" },
            { img: "https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Photography" },
          ].map((topic, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow">
              <img
                src={topic.img}
                alt={topic.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold text-center mt-2">{topic.title}</h3>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg block mx-auto">
          Customize & Start
        </button>
      </section>

      <section className="px-4 sm:px-10 py-8 sm:py-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          We Value Your Feedback
        </h2>
        <div className="max-w-2xl mx-auto">
          <textarea
            placeholder="Write your feedback..."
            className="w-full h-8 p-0.5 border rounded-lg "
          ></textarea>
          <textarea
            placeholder="Additional comments..."
            className="w-full h-32 p-4 border rounded-lg"
          ></textarea>
          
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg w-full sm:w-auto">
            Submit Feedback
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default page;
