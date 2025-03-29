"use client"; // Required for React hooks in Next.js

import React, { useState } from "react";

const Course = () => {
  const categories = ["All Courses", "Business", "Science & Technology", "Arts & Humanities", "Health"];
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const courses = [
    {
      title: "Introduction to Public Health",
      category: "Health",
      description: "Explore the basics of public health, including strategies for well-being.",
      img: "https://sidgs.com/wp-content/uploads/2023/02/Exploring-Emerging-Technologies-for-Digital-Transformation-in-Health-Care-02.png",
      rating: 3, // ⭐ Rating out of 5
    },
    {
      title: "Creative Writing Workshop",
      category: "Arts & Humanities",
      description: "Master the art of storytelling, poetry, and other forms of creative writing.",
      img: "https://www.shutterstock.com/image-vector/digital-drawing-creative-writing-using-260nw-2347893209.jpg",
      rating: 4,
    },
    {
      title: "Basics of Coding: Python for Beginners",
      category: "Science & Technology",
      description: "Start your journey in programming with easy-to-follow Python lessons.",
      img: "https://media.istockphoto.com/id/1413990965/photo/glowing-python-programming-language-code-on-a-blue-digital-surface-with-a-sphere-grid-design.jpg?s=612x612&w=0&k=20&c=sC5Gcktg85_J6e50P5DGngrez1MElLql5xrYKd13sA4=",
      rating: 5,
    },
    {
      title: "Financial Literacy 101",
      category: "Business",
      description: "Understand budgeting, saving, and investing to manage personal or business finances.",
      img: "https://www.shutterstock.com/image-vector/financial-literacy-budgeting-managing-personal-260nw-2307242813.jpg",
      rating: 3,
    },
    {
      title: "Fundamentals of Data Science",
      category: "Science & Technology",
      description: "Understand data analysis, visualization, and the role of data in decision-making.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPj3EGP36Vn1IrCMQUm9m3-xsrn2Awe5Nvw&s",
      rating: 4,
    },
    {
      title: "Nutrition and Wellness Essentials",
      category: "Health",
      description: "Learn about balanced diets, food nutrients, and how to maintain a healthy lifestyle.",
      img: "https://motionarray.imgix.net/motion-array-2916866-jAhwN1Hscb-high_0008.jpg?w=660&q=60&fit=max&auto=format",
      rating: 2,
    },
  ];

  // Filter courses based on the selected category
  const filteredCourses = activeCategory === "All Courses"
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 my-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="px-1 sm:px-2 md:px-4 lg:px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col h-[200px]">
                <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{course.description}</p>

                {/* Spacer - Pushes the stars and button to the bottom */}
                <div className="flex-grow"></div>

                {/* Stars and Button Section */}
                <div className="flex items-center justify-between mt-2">
                  {/* Star Rating */}
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < course.rating ? "text-yellow-500" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Browse Certification Button */}
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
    </div>
  );
};

export default Course;