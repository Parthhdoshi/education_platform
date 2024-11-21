// components/Footer.tsx
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
];

const quizLinks = [
  { title: "Mathematics Quiz", href: "/quiz/math" },
  { title: "Science Quiz", href: "/quiz/science" },
  { title: "History Quiz", href: "/quiz/history" },
  { title: "General Knowledge", href: "/quiz/gk" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Logo and Company Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Send className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                Minimalistic Learning
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Empowering students through innovative learning solutions and
              comprehensive educational support.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2: Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { title: "About Us", href: "/about" },
                { title: "Courses", href: "/courses" },
                { title: "Tutors", href: "/tutors" },
                { title: "Contact", href: "/contact" },
              ].map(({ title, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Quiz Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-300">
              Online Quizzes
            </h3>
            <ul className="space-y-2">
              {quizLinks.map(({ title, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-300">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  123 Education Street, Learning City
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  support@mentoreducation.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-100 dark:bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mentor Education. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
