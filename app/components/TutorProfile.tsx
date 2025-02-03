"use client";

import React, { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Function to get the number of days in a month
const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const TutorProfile: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth()); // Default to current month
  const [selectedYear] = useState<number>(new Date().getFullYear()); // Default to current year

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    console.log(`Selected Date: ${months[selectedMonth]} ${date}, ${selectedYear}`);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(event.target.value));
    setSelectedDate(null); // Reset selected date when month changes
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Tutor Profile
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Section - Tutor Info */}
          <div className="lg:w-2/3">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://assets.manutd.com/AssetPicker/images/0/0/20/87/1333066/Player_Profile_Kobee_Mainoo1719482688199.jpg"
                alt="Tutor Profile"
                className="w-20 h-20 rounded-full shadow"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  John Doe
                </h2>
                <p className="text-sm text-gray-500">Price: £12-£20/hour</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p className="text-gray-700 font-medium mb-4">
              Expertise:{" "}
              <span className="font-normal">
                Digital Marketing and Mathematics
              </span>
            </p>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <h3 className="text-lg font-bold text-gray-900 mb-2">About Tutor</h3>
              <p className="text-gray-600 mb-2">
                Experienced tutor with expertise in Digital Marketing and
                Mathematics, dedicated to simplifying complex concepts for
                learners.
              </p>
              <p className="text-gray-600">
                With 5+ years in SEO, social media management, and digital
                advertising, and 7+ years teaching math from basic arithmetic to
                advanced calculus, they’ve successfully trained over 200
                students and helped countless others achieve their academic and
                professional goals.
              </p>
            </div>
          </div>

          {/* Right Section - Availability and Reviews */}
          <div className="lg:w-1/3 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Select Date
              </h3>
              {/* Month Selector */}
              <div className="mb-4">
                <label
                  htmlFor="month"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Month
                </label>
                <select
                  id="month"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
                >
                  {months.map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Calendar */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <div className="grid grid-cols-7 gap-2 text-center">
                  {Array.from({ length: daysInMonth }, (_, i) => (
                    <div
                      key={i}
                      onClick={() => handleDateSelect(i + 1)}
                      className={`py-2 rounded-lg cursor-pointer ${
                        selectedDate === i + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-blue-200"
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              {selectedDate && (
                <p className="mt-4 text-green-600">
                  Selected Date: {months[selectedMonth]} {selectedDate},{" "}
                  {selectedYear}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Payment Plan</h3>
              <div className="flex space-x-4">
                <button className="w-1/3 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-600">
                  Per Session
                </button>
                <button className="w-1/3 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-600">
                  Weekly Package
                </button>
                <button className="w-1/3 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-600">
                  Monthly Package
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reviews</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "John K.",
                    feedback:
                      "The tutor made advanced calculus feel approachable and easy to understand. I’ve gained so much confidence in my math skills!",
                    photo: "https://via.placeholder.com/50",
                  },
                  {
                    name: "Emmanuel O.",
                    feedback:
                      "The tutor takes the time to ensure you truly understand each topic, whether it’s math or marketing. I couldn’t have asked for a better teacher!",
                    photo: "https://via.placeholder.com/50",
                  },
                ].map((review, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 p-4 rounded-lg shadow-inner flex space-x-4"
                  >
                    <img
                      src={review.photo}
                      alt={`${review.name}'s profile`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-600">{review.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-700">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
