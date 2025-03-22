"use client"; // Required for React hooks in Next.js

import React, { useState } from "react";

const Course = () => {
    return (
      <div>
        {/* Course Categories */}
        <div className="flex flex-wrap justify-center gap-10">
          {["All Courses", "Business", "Science & Technology", "Arts & Humanities", "Health"].map(
            (category, index) => (
              <button
                key={index}
                className={`px-4 py-2 ${
                  index === 0
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
  
        {/* Courses Grid */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Introduction to Public Health",
              description:
                "Explore the basics of public health, including strategies for well-being.",
              img: "https://th.bing.com/th/id/OIP.m09QD_mq10we7EC5G7ORAgHaE5?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
            {
              title: "Creative Writing Workshop",
              description:
                "Master the art of storytelling, poetry, and other forms of creative writing.",
              img: "https://th.bing.com/th/id/OIP.leDvRKEwWLP16MFtVHXoWAHaEi?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
            {
              title: "Basics of Coding: Python for Beginners",
              description:
                "Start your journey in programming with easy-to-follow Python lessons.",
              img: "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
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

export default Course;
