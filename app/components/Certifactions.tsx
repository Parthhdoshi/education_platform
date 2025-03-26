import Image from "next/image";
import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Financial Literacy 101",
      description:
        "Understand budgeting, saving, and investing to manage personal or business finances.",
      img: "https://via.placeholder.com/300",
      rating: 4,
      progress: 50,
    },
    {
      title: "Fundamentals of Data Science",
      description:
        "Understand data analysis, visualization, and the role of data in decision-making.",
      img: "https://via.placeholder.com/300",
      rating: 5,
      progress: 30,
    },
    {
      title: "Nutrition and Wellness Essentials",
      description:
        "Learn about balanced diets, food nutrients, and how to maintain a healthy lifestyle.",
      img: "https://via.placeholder.com/300",
      rating: 5,
      progress: 85,
    },
  ];

  const tutors = [
    {
      name: "John Doe",
      expertise: "Digital Marketing",
      students: 500,
      rating: 5,
    },
    {
      name: "Jane Smith",
      expertise: "Mathematics",
      students: 410,
      rating: 4,
    },
    {
      name: "Mark Johnson",
      expertise: "Physics",
      students: 300,
      rating: 5,
    },
  ];

  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Certifications Section */}
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">
          Enrolled Certification Courses
        </h2>
        <div className="grid grid-cols-3 gap-6 mb-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {cert.description}
                </p>
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {cert.progress}% completed
                  </p>
                </div>
                {/* Rating */}
                <div className="flex items-center mt-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-5 h-5 ${
                        starIndex < cert.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      <path d="M12 17.27l5.18 3.02-1.64-6.03L20.72 9.9l-6.18-.53L12 4 9.46 9.37l-6.18.53 4.64 4.36-1.64 6.03L12 17.27z" />
                    </svg>
                  ))}
                </div>
                {/* Button */}
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard Section */}
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">
          Leaderboard
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Overall Top Tutors for the Month
        </p>
        <div className="space-y-4">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between"
            >
              {/* Tutor Info */}
              <div className="flex items-center gap-4">
                <Image
                  src="https://via.placeholder.com/40"
                  alt={tutor.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {tutor.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expertise: {tutor.expertise}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Total no. of students tutored: {tutor.students}
                  </p>
                </div>
              </div>
              {/* Rating and Buttons */}
              <div className="flex items-center gap-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-5 h-5 ${
                        starIndex < tutor.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      <path d="M12 17.27l5.18 3.02-1.64-6.03L20.72 9.9l-6.18-.53L12 4 9.46 9.37l-6.18.53 4.64 4.36-1.64 6.03L12 17.27z" />
                    </svg>
                  ))}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Book a Class
                </button>
                <button className="px-4 py-2 bg-gray-100 text-blue-600 rounded-lg hover:bg-gray-200 border">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
