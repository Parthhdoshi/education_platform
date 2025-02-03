import React from 'react';

const Course = () => {
    return (
      <div>
        {/* Course Categories */}
        <div className="flex justify-center gap-10">
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
              img: "https://assets.manutd.com/AssetPicker/images/0/0/20/87/1333066/Player_Profile_Kobee_Mainoo1719482688199.jpg",
            },
            {
              title: "Creative Writing Workshop",
              description:
                "Master the art of storytelling, poetry, and other forms of creative writing.",
              img: "https://via.placeholder.com/300x200",
            },
            {
              title: "Basics of Coding: Python for Beginners",
              description:
                "Start your journey in programming with easy-to-follow Python lessons.",
              img: "https://via.placeholder.com/300x200",
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Course;


