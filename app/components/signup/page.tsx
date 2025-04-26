"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactError, setContactError] = useState('');

  const validateFirstName = (value: string) => {
    if (!/^[A-Za-z]+$/.test(value)) {
      setFirstNameError('First name should only contain letters.');
    } else {
      setFirstNameError('');
    }
    setFirstName(value);
  };

  const validateLastName = (value: string) => {
    if (!/^[A-Za-z]+$/.test(value)) {
      setLastNameError('Last name should only contain letters.');
    } else {
      setLastNameError('');
    }
    setLastName(value);
  };

  const validateEmail = (value: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
    setEmail(value);
  };

  const validateContact = (value: string) => {
    if (!/^\d+$/.test(value)) {
      setContactError('Contact number should only contain numbers.');
    } else {
      setContactError('');
    }
    setContact(value);
  };

  const handleSignUp = async () => {
    if (!firstNameError && !lastNameError && !emailError && !contactError) {
      try {
        const response = await axios.post('http://localhost:5000/auth/signup', {
          username: firstName + lastName,
          email,
          password,
        });

        alert(response.data.message || 'Sign up successful!');
        // clear fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setPassword('');
        // redirect to login page
        router.push('/logIn');
      } catch (error: any) {
        if (error.response) {
          alert(error.response.data.error || 'Signup failed');
        } else {
          alert('Network error or server not responding');
        }
      }
    } else {
      alert('Please fix the errors before signing up.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300">
        <div className="bg-blue-500 p-6 text-white">
          <h1 className="text-3xl font-bold text-center text-white">Create Account</h1>
          <p className="text-center text-blue-100 mt-1">Join our community today</p>
        </div>
        <div className="p-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => validateFirstName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {firstNameError && <p className="text-red-500 text-sm mt-1">{firstNameError}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => validateLastName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {lastNameError && <p className="text-red-500 text-sm mt-1">{lastNameError}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
              <input
                type="tel"
                required
                value={contact}
                onChange={(e) => validateContact(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {contactError && <p className="text-red-500 text-sm mt-1">{contactError}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition"
            >
              Create Account
            </button>
            <div className="text-center mt-6">
              <Link href="/logIn" className="text-blue-500 font-medium hover:text-blue-700 transition">
                Already have an account? Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
