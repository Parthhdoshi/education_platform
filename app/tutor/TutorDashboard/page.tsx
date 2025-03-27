'use client';    /* Made by Sandip B. */

import { useState } from 'react';
import Image from 'next/image';
import TutorList from '../../components/Tutorlist';
import Course from '../../components/Course';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
const Sidebar = () => {
  const pathname = usePathname();
  const menuItems = [
    { icon: '📊', label: 'Dashboard', href: '/tutorDashboard' },
    { icon: '📚', label: 'Course Management', href: '/tutor/course-management' },
    { icon: '👥', label: 'Student Management', href: '/tutor/student-management' },
    { icon: '📝', label: 'Assignments & Assessments', href: '/tutor/assignments' },
    { icon: '💰', label: 'Revenue', href: '/tutor/revenue' },
    { icon: '⚙️', label: 'Settings', href: '/tutor/settings' },
  ];

  return (
    <div className="w-64 bg-white p-6 flex flex-col">
      <div className="mb-8">
        <Link href="/tutorDashboard" className="text-blue-600 text-xl">
          Minimalistic Learning
        </Link>
      </div>
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center p-2 mb-2 rounded-lg cursor-pointer ${
              pathname === item.href ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <Link 
        href="/#" 
        className="flex items-center text-red-500 hover:text-red-700 mt-4">
        <span className="items-center ml-8">{'[-> '}Log out</span>
      </Link>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ icon, count, label }: { icon: string; count: number; label: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
    <div className="text-blue-500 text-2xl">{icon}</div>
    <div>
      <div className="text-2xl font-semibold">{count}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  </div>
);

// Schedule Item Component
const ScheduleItem = ({ time, title, subtitle, duration }: { time: string; title: string; subtitle: string; duration: string }) => (
  <div className="mb-4">
    <div className="text-gray-600 mb-1">{time}</div>
    <div className="bg-blue-50 p-4 rounded-lg">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600">{subtitle} | {duration}</div>
    </div>
  </div>
);

// Revenue Chart Component
const RevenueChart = () => {
  const data = [
    { month: 'Physical Classes', amount: 2800 },
    { month: 'Online Classes', amount: 3900 },
  ];

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{item.month}</span>
            <span>£{item.amount}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: `${(item.amount / 4000) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Dashboard Component
export default function TutorDashboard() {
  const [user] = useState({
    name: 'John Doe',
    avatar: '/https://cdn4.vectorstock.com/i/1000x1000/18/58/color-silhouette-cartoon-half-body-faceless-man-vector-15091858.jpg'
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 bg-blue-200 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-gray-400">Welcome back,</h2>
            <h1 className="text-2xl font-semibold">{user.name}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100">🔔</button>
            <div className="flex items-center space-x-2">
              <Image
                src={user.avatar}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>{user.name}</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatsCard icon="📚" count={30} label="Total Courses" />
          <StatsCard icon="👥" count={12} label="Total Students" />
          <StatsCard icon="💰" count={6700} label="Total Revenue" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Schedule Section */}
          <div className="col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Today's Lesson Schedule</h2>
                <button className="text-blue-500">View All</button>
              </div>
              <ScheduleItem
                time="1:30"
                title="CS++"
                subtitle="Physical Class"
                duration="1:00pm | 30 mins"
              />
              <ScheduleItem
                time="2:30"
                title="Software Management"
                subtitle="Online Class"
                duration="2:00pm | 60 mins"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Top Students for the Month</h2>
                <TutorList />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Revenue for the Month</h2>
                <RevenueChart />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Uploaded Courses</h2>
              <Course />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Upcoming Deadlines</h2>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Schedule live classes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Grade assignments</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Upload extra learning materials</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Update payment</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}