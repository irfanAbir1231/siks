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

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login attempt:", formData);
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
            Login to Your Account
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-lg mb-1 text-center">
            Welcome back to IUT-SIKS
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
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                >
                  Email Address
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
                  placeholder="Enter your password"
                  required
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.password}
                  </p>
                )}
              </div>
              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Forgot your password?
                </Link>
              </div>
              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-green-400 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                >
                  Log In <span className="ml-2">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Register Link */}
        <div className="mt-7 text-center animate-fade-in">
          <p className="text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-green-600 dark:text-green-400 hover:underline font-semibold"
            >
              Register here
            </Link>
          </p>
        </div>
        {/* Additional Info */}
        <div className="mt-6 text-center animate-fade-in">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By logging in, you agree to the{" "}
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
