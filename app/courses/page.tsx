import React from 'react'

import SearchBarCourse from '../components/SearchBarCourse'
import Course from '../components/Course'
import ExploreTutor from '../components/ExploreTutor'
import TutorList from '../components/Tutorlist'
import PhysicalClass from '../components/PhysicalClass'
import Certifications from '../components/Certifactions'
import CoursePageFooter from '../components/CoursePageFooter'

const page = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-10">
    {/* Main Content */}
    <div className="space-y-10">
      {/* Hero Section */}
    
        <ExploreTutor />
    

      {/* Search Bar */}
      <div>
        <SearchBarCourse />
      </div>

      {/* Course Component */}
      <div>
      <TutorList/>
        <Course />
        <PhysicalClass/>
        <Certifications/>
       
      
      </div>
      
    </div>
  </div>
  )
}

export default page