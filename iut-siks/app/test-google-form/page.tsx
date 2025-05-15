"use client";

import { useRef, useState } from "react";

// Google Form constants (use your actual values)
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdYsi8znycWEY9kdh8NPK9RkJtHME2BinexJyQ-wtYaU0MY4w/formResponse";
const ENTRY_FULLNAME = "entry.125437881";
const ENTRY_EMAIL = "entry.974703656";
const ENTRY_STUDENTID = "entry.1276808594";
const ENTRY_DEPARTMENT = "entry.1465142362";
// Hidden fields required by Google Forms (from the HTML source)
const HIDDEN_FVV = "1";
const HIDDEN_PAGE_HISTORY = "0";
const HIDDEN_FBXZ = "2049128986219619479";

export default function TestGoogleFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    department: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const formBody = new URLSearchParams({
        [ENTRY_FULLNAME]: formData.fullName,
        [ENTRY_STUDENTID]: formData.studentId,
        [ENTRY_EMAIL]: formData.email,
        [ENTRY_DEPARTMENT]: formData.department,
        fvv: HIDDEN_FVV,
        pageHistory: HIDDEN_PAGE_HISTORY,
        fbzx: HIDDEN_FBXZ,
      });
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });
      setMessage("Registration submitted successfully!");
      setFormData({ fullName: "", studentId: "", email: "", department: "" });
    } catch (error) {
      setMessage("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Test Google Form Submission
        </h1>
        {message && (
          <p className="mb-4 text-center text-sm text-green-600 dark:text-green-400">{message}</p>
        )}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Student ID</label>
            <input
              type="text"
              id="studentId"
              required
              value={formData.studentId}
              onChange={e => setFormData({ ...formData, studentId: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter your student ID"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Department</label>
            <select
              id="department"
              required
              value={formData.department}
              onChange={e => setFormData({ ...formData, department: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select your department</option>
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="MPE">MPE</option>
              <option value="CEE">CEE</option>
              <option value="BTM">BTM</option>
              <option value="TVE">TVE</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
            Test Google Form Submit
          </button>
        </form>
      </div>
    </div>
  );
}
