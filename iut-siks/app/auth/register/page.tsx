"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

// SVG Mosque Icon
const MosqueIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="24" cy="14" rx="7" ry="7" fill="#22c55e" />
    <rect
      x="10"
      y="21"
      width="28"
      height="17"
      rx="4"
      fill="#fff"
      fillOpacity="0.7"
    />
    <rect
      x="10"
      y="21"
      width="28"
      height="17"
      rx="4"
      stroke="#22c55e"
      strokeWidth="2"
    />
    <rect x="20" y="28" width="8" height="10" rx="2" fill="#22c55e" />
    <rect
      x="20"
      y="28"
      width="8"
      height="10"
      rx="2"
      stroke="#16a34a"
      strokeWidth="1.5"
    />
    <rect x="13" y="24" width="4" height="6" rx="1.5" fill="#a7f3d0" />
    <rect x="31" y="24" width="4" height="6" rx="1.5" fill="#a7f3d0" />
  </svg>
);

interface RegistrationForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  department: string;
}

export default function UserRegistrationPage() {
  const [formData, setFormData] = useState<RegistrationForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
  });

  const [errors, setErrors] = useState<Partial<RegistrationForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<RegistrationForm> = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Department validation
    if (!formData.department) {
      newErrors.department = "Please select your department";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically send this to your backend
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-green-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 px-0 w-full relative overflow-hidden">
      {/* Vignette overlay */}
      <div
        className="pointer-events-none select-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.25) 100%)",
        }}
      />
      <div className="w-full max-w-md px-4 animate-fade-in-up z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-3 scale-110 drop-shadow-lg">
            <MosqueIcon />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 text-center drop-shadow">
            Create Your Account
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-lg mb-1 text-center">
            Join the IUT-SIKS community
          </p>
          <span className="text-sm text-green-600 dark:text-green-400 font-medium mb-2 text-center">
            Empowering Islamic Knowledge Seekers
          </span>
        </div>
        <div className="relative">
          {/* Glassy Card with Gradient Border */}
          <div
            className="bg-white/20 dark:bg-gray-800/30 rounded-3xl shadow-2xl border border-transparent p-8 backdrop-blur-xl animate-fade-in-up"
            style={{
              borderImage:
                "linear-gradient(135deg, #22c55e 0%, #3b82f6 100%) 1",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-500 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:border-green-400 outline-none"
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.fullName}
                  </p>
                )}
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-500 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:border-green-400 outline-none"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-500 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:border-green-400 outline-none"
                  placeholder="Create a password"
                  required
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.password}
                  </p>
                )}
              </div>
              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-500 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:border-green-400 outline-none"
                  placeholder="Confirm your password"
                  required
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              {/* Department */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                  Department
                </label>
                <select
                  id="department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-500 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:border-green-400 outline-none"
                  required
                >
                  <option value="">Select your department</option>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="ME">ME</option>
                  <option value="CE">CE</option>
                  <option value="Other">Other</option>
                </select>
                {errors.department && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.department}
                  </p>
                )}
              </div>
              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-green-400 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                >
                  Register <span className="ml-2">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Login Link */}
        <div className="mt-7 text-center animate-fade-in">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-green-600 dark:text-green-400 hover:underline font-semibold"
            >
              Login here
            </Link>
          </p>
        </div>
        {/* Additional Info */}
        <div className="mt-6 text-center animate-fade-in">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By registering, you agree to the{" "}
            <Link
              href="/terms"
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
