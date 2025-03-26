import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Harsh Ratnani",
      role:
        "Visionary leader with a passion for education and technology innovation.",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Parth Doshi",
      role:
        "Expert in operational strategy and user-focused solutions, fostering collaboration and growth.",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Manan Doshi",
      role: "User Experience and User Interface Designer.",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Our Journey Section */}
      <section className="py-16 relative">
        <div className="absolute top-2 left-2 w-16 h-16 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-5 right-5 w-12 h-12 bg-purple-200 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Journey Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              Our Journey
            </h2>
            <p className="text-gray-600 mb-4">
              <strong>2024: Building the Team</strong>
              <br />
              Co-founders brought together developers and education enthusiasts
              to design a platform that simplifies the process for educators
              and improves learning outcomes for students.
            </p>
            <p className="text-gray-600">
              <strong>2025: Beta Version Launched</strong>
              <br />
              Released the platform’s first version, offering basic course
              creation tools and support for educators.
            </p>
          </div>
          {/* Journey Image */}
          <div className="md:w-1/3 flex justify-end">
            <Image
              src="https://media.istockphoto.com/id/157284581/photo/road-by-night.jpg?s=612x612&w=0&k=20&c=utloT84rFRHikE2EcrnG5N-bE_R4dQEfKcgrPxGjUyY="
              alt="Journey Image"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
            Meet Our Team
          </h2>
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
