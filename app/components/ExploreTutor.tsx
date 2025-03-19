import React from 'react'

const ExploreTutor = () => {
  return (
    <div><section className="bg-blue-50 min-h-[438px] flex items-center justify-center shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-10">
      {/* Left Content */}
      <div>
        <h1 className="text-3xl font-bold text-blue-600">
          Explore a wide range of courses designed to meet diverse learning needs.
        </h1>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Hire a Tutor
          </button>
          <button className="px-6 py-3 bg-blue-200 text-blue-600 rounded-lg hover:bg-blue-300">
            Customise Courses
          </button>
        </div>
      </div>
  
      {/* Right Image */}
      <div className="relative">
      <div className=" absolute top-0 right-0 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow mt- ">

          <span>John Doe</span>
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/18/58/color-silhouette-cartoon-half-body-faceless-man-vector-15091858.jpg"
            alt="User Avatar"
            className="w-15 h-10 rounded-full"
          />
        </div>
        <img
          src="https://dpskota.com/blog/wp-content/uploads/2021/04/39049-730x410.jpg"
          alt="Student"
          className="rounded-full w-64 h-64 object-cover shadow-lg  mt-16"
        />
      </div>
    </div>
  </section>
  </div>
  )
}

export default ExploreTutor