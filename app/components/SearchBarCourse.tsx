import React from 'react'

const SearchBarCourse = () => {
  return (

   
    <div className="bg-blue-200">
      {/* User Info */}
      <div className="flex justify-end items-center p-4 gap-4 bg-blue-200">
        <span className="text-gray-600 text-lg">John Doe</span>
        <img
          src="https://cdn4.vectorstock.com/i/1000x1000/18/58/color-silhouette-cartoon-half-body-faceless-man-vector-15091858.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-10">
        {/* Welcome Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">
            Learn Anytime,Anywhere 
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Learn, Grow, Succeed—Your Next Skill Starts Here.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full flex justify-center items-center mb-10">
  {/* Search Bar Centered */}
  <input
    type="text"
    placeholder="Search Courses"
    className="flex flex-wrap w-1/2 px-6 py-2 border border-gray-400 rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />

  {/* Filter Button at Right Mid Corner */}
  <button className=" flex flex-wrap px-2 py-2 bg-blue-200 border border-gray-400 rounded-lg hover:bg-gray-200">
    Filter by ▼
  </button>
</div>

      </main>
    </div>
        );
      }
      


export default SearchBarCourse