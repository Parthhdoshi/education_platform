import React from "react";

const TutorList = () => {
  const tutors = [
    {
      name: "John Doe",
      expertise: "Digital Marketing and Mathematics",
      availability: "Mondays, Thursdays, and Fridays",
      price: "£12-£20/hour",
      img: "https://via.placeholder.com/100",
      rating: 4, // Change this value to dynamically set the rating
    },
    {
      name: "Jane Smith",
      expertise: "English Literature and History",
      availability: "Tuesdays and Saturdays",
      price: "£15-£25/hour",
      img: "https://via.placeholder.com/100",
      rating: 5,
    },
    {
      name: "Mark Johnson",
      expertise: "Physics and Chemistry",
      availability: "Weekends only",
      price: "£18-£30/hour",
      img: "https://via.placeholder.com/100",
      rating: 3,
    },
  ];

  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Tutor List
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              {/* Tutor Image */}
              <img
                src={tutor.img}
                alt={tutor.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              {/* Tutor Details */}
              <h3 className="text-lg font-bold text-gray-800">{tutor.name}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Expertise: {tutor.expertise}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Availability: {tutor.availability}
              </p>
              <p className="text-blue-600 text-sm font-semibold mt-2">
                Price: {tutor.price}
              </p>
              {/* Rating */}
              <div className="flex items-center mt-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-5 h-5 ${
                      starIndex < tutor.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                  >
                    <path d="M12 17.27l5.18 3.02-1.64-6.03L20.72 9.9l-6.18-.53L12 4 9.46 9.37l-6.18.53 4.64 4.36-1.64 6.03L12 17.27z" />
                  </svg>
                ))}
              </div>
              {/* Action Buttons */}
              <div className="mt-6 flex gap-4">
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

export default TutorList;
