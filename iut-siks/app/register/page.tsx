// "use client";

// import { FormEvent, useState } from "react";

// interface FormData {
//   fullName: string;
//   studentId: string;
//   email: string;
//   department: string;
// }

// export default function RegisterEventPage() {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     studentId: "",
//     email: "",
//     department: "",
//   });

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto">
//         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//           Event Registration
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6"
//         >
//           <div>
//             <label
//               htmlFor="fullName"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               required
//               value={formData.fullName}
//               onChange={(e) =>
//                 setFormData({ ...formData, fullName: e.target.value })
//               }
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//               placeholder="Enter your full name"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="studentId"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
//             >
//               Student ID
//             </label>
//             <input
//               type="text"
//               id="studentId"
//               required
//               value={formData.studentId}
//               onChange={(e) =>
//                 setFormData({ ...formData, studentId: e.target.value })
//               }
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//               placeholder="Enter your student ID"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               required
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="department"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
//             >
//               Department
//             </label>
//             <select
//               id="department"
//               required
//               value={formData.department}
//               onChange={(e) =>
//                 setFormData({ ...formData, department: e.target.value })
//               }
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//             >
//               <option value="">Select your department</option>
//               <option value="CSE">CSE</option>
//               <option value="EEE">EEE</option>
//               <option value="MCE">MCE</option>
//               <option value="CEE">CEE</option>
//               <option value="BTM">BTM</option>
//               <option value="TVE">TVE</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
//           >
//             Register for Event
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";

import { FormEvent, useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  department: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterEventPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        department: formData.department,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Registration successful!");
      setFormData({
        fullName: "",
        email: "",
        department: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setMessage(data.error || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Event Registration
        </h1>

        {message && (
          <p className="mb-4 text-center text-sm text-red-500">{message}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6"
        >
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="Enter your email"
            />
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Department
            </label>
            <select
              id="department"
              required
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
            >
              <option value="">Select your department</option>
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="MCE">MCE</option>
              <option value="CEE">CEE</option>
              <option value="BTM">BTM</option>
              <option value="TVE">TVE</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="Create a password"
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
          >
            Register for Event
          </button>
        </form>
      </div>
    </div>
  );
}
