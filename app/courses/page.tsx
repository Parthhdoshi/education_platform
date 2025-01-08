import React from 'react'

import SearchBarCourse from '../components/SearchBarCourse'
import Course from '../components/Course'

const page = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-10">
      {/* Main Content */}
      <div className="space-y-0">
        {/* Search Component */}
        <SearchBarCourse />

        {/* Course Component */}
        <Course />
      </div>
    </div>
  )
}

export default page