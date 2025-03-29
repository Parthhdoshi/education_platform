"use client";

import React from 'react';
import { FaThLarge, FaUser, FaCreditCard, FaCog,  FaSignOutAlt, FaBell, FaChartBar } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import TutorProfile from '../components/TutorProfile';

const AdminDashboard = () => {

  const stats = [
    { number: 33, label: "Total Students", icon: "👤" },
    { number: 82, label: "Courses Sold", icon: "📚" },
    { number: 14, label: "Total Tutors", icon: "👨‍🏫" },
    { number: 19, label: "Students Enrolled", icon: "🧑‍🎓" },
  ];


  const activityLog = [
    { activity: "New user registered", details: "Tutor signed up", status: "Approved", action: "View profile" },
    { activity: "New student enrolment", details: "Student enrolled in UIUX course", status: "Pending", action: "View profile" },
    { activity: "Instructor application new content", details: "Content: CSS++", status: "Approved", action: "View profile" },
    { activity: "System update", details: "Security test", status: "Pending", action: "View update" },
  ];

  // Updated engagement data to match image
  const engagementData = [
    { name: 'Daily', value: 25, color: '#2563EB' },
    { name: 'Weekly', value: 45, color: '#DBEAFE' },
    { name: 'Monthly', value: 30, color: '#60A5FA' },
  ];

  return (
    <div className="flex flex-wrap bg-blue-500">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-blue-600">Minimalistic Learning</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-4 py-3 text-indigo-900 via-purple-900 to-pink-900 font-bold">
              <a href="/AdminDashboard" className="flex items-center">
                <FaThLarge className="mr-3 text-lg md:text-xl" />
                Dashboard
              </a>
            </li>
            {/* Add other navigation items */}
            <li className="px-4 py-3">
              <a href="#" className="flex items-center text-gray-600">
                <FaUser className="mr-3 text-lg md:text-xl" />
                User Management
              </a>
            </li>
            <li className="px-4 py-3">
              <a href="#" className="flex items-center text-gray-600">
                <FaCreditCard className="mr-3 text-lg md:text-xl" />
                Payment & Subscription
              </a>
            </li>
            <li className="px-4 py-3">
              <a href="#" className="flex items-center text-gray-600">
                <FaChartBar className="mr-3 text-lg md:text-xl" />
                Reports
              </a>
            </li>
            <li className="px-4 py-3">
              <a href="#" className="flex items-center text-gray-600">
                <FaCog className="mr-3 text-lg md:text-xl" />
                Settings
              </a>
            </li>
          </ul>
        </nav>

        {/* Logout section */}

        <div className="fixed -bottom-4 flex">
  <a 
    href="/#" 
    className="fixed bottom-4 flex text-red-500 hover:text-red-700 mt-4">
    <span className="font-semibold text-lg ml-8">{'[-> '}Log out</span>
  </a>
</div>


      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-7 bg-[#daf0ff]">
        {/* Header with Dashboard title, notifications, and user profile */}
    <div className="flex justify-between items-center bg-white  p-4 mt-16 lg:mt-0">
    <h1 className="text-x2 md:text-2xl text-blue-800">Dashboard</h1>

           {/* Right Side: Notifications & Profile */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Notification Icon with Badge */}
            <div className="relative cursor-pointer">
              <FaBell className="text-gray-600 text-xl md:text-2xl" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>

            {/* User Profile */}
            <div className="relative flex items-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
                alt="Icon"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gray-500"
              />
              <div>
                <p className="text-sm font-medium text-gray-600">John Doe</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mt-4 p-4 md:p-6 rounded-lg">
          <p className="text-md text-blue-500">Welcome back,</p>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center">
            John Doe <span className="ml-2">👋</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow flex items-center space-x-2"
            >
              <span className="text-3xl text-blue-600">{stat.icon}</span>
              <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-600 text-sm whitespace-nowrap">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Popular Courses */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-blue-700 font-semibold">Popular Courses</h2>
            <a href="#" className="text-blue-600 text-sm">View all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Finance Course */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img 
                  src="https://files.oaiusercontent.com/file-JsTf2TAH5UtJKHy4XPG3UH?se=2025-03-21T14%3A39%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dce57c013-0268-42e8-a586-e7a34926a94f.webp&sig=MVubgNHcvU%2BFb9pYu/6BlW7nhQSQjs%2BNiLU8O2PVTDw%3D" 
                  alt="Finance Course" 
                  className="w-full h-48 object-cover" 
                />
                <button className="absolute bottom-4 right-4 p-2 bg-white rounded-lg shadow-sm">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-14 7h14" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-black mb-2">Finance Course</h3>
                <p className="text-gray-600 text-sm">Basic finance course to manage your money</p>
              </div>
            </div>

            {/* Programming Course */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img 
                  src="https://files.oaiusercontent.com/file-D72BNrFAEcra3TfKAhpChK?se=2025-03-21T14%3A39%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6e08ee36-3be1-4906-873d-5618c6ddaa98.webp&sig=GxdTB0AGbLJa0oWMJR%2Ba/ZWKWmIJSdGphLToGFbpN%2Bw%3D" 
                  alt="Programming Course" 
                  className="w-full h-48 object-cover" 
                />
                <button className="absolute bottom-4 right-4 p-2 bg-white rounded-lg shadow-sm">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-14 7h14" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-black mb-2">Programming Basics</h3>
                <p className="text-gray-600 text-sm">Introduction to programming fundamentals and Python basics</p>
              </div>
            </div>

            {/* Fitness Course */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img 
                  src="https://files.oaiusercontent.com/file-RuTA9ZPqeDJxz772uwwAK9?se=2025-03-21T14%3A39%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ddcb445bf-9752-481c-98e6-199a816145c2.webp&sig=Rc5SieK0VPWjHEfjWtUmqSsRy8Vp81q6Uadr0rvoT%2Bg%3D" 
                  alt="Fitness Course" 
                  className="w-full h-48 object-cover" 
                />
                <button className="absolute bottom-4 right-4 p-2 bg-white rounded-lg shadow-sm">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-14 7h14" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-black mb-2">Fitness Training</h3>
                <p className="text-gray-600 text-sm">Complete body workout and nutrition guide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Log and Student Engagement Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Activity Log Title (Outside Box) */}
          <h2 className="text-lg font-medium text-blue-700 lg:col-span-2">Activity Log</h2>
          {/* Student Engagement Title (Outside Box) */}
          <h2 className="text-lg font-medium text-blue-700">Student Engagement</h2>

          {/* Activity Log Box */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4 md:p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-4 font-medium">Activity</th>
                  <th className="pb-4 font-medium">Details</th>
                  <th className="pb-4 font-medium">Status</th>
                  <th className="pb-4 font-medium w-32">Action</th>
                </tr>
              </thead>
              <tbody>
                {activityLog.map((log, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-3 text-sm text-gray-600">{log.activity}</td>
                    <td className="py-3 text-sm text-gray-600">{log.details}</td>
                    <td className="py-3">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        log.status === 'Approved' 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'bg-yellow-50 text-yellow-600'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="py-3 whitespace-nowrap">
                      <a href="#" className="text-blue-600 text-sm hover:underline">{log.action}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Student Engagement Box */}
          <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
            <div className="flex justify-center items-center mb-6">
              <ResponsiveContainer width={250} height={250}>
                <PieChart>
                  <Pie
                    data={engagementData}
                    innerRadius={55}
                    outerRadius={75}
                    startAngle={0}
                    endAngle={360}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    label={({ value, x, y }) => (
                      <text 
                      x={x} 
                      y={y} 
                      fill="#000"        
                      fontSize="12px"
                      textAnchor="middle" 
                      dominantBaseline="central"
                    >
                      {`${value}%`}      
                    </text>
                    
                      
                    )}
                      labelLine={false}
                  >
                  {engagementData.map((entry, index) => (
  <Cell 
    key={`cell-${index}`}     
    fill={entry.color}
    stroke="none"
  />
))}

                    
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {engagementData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-sm mr-3" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium text-gray-800">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;