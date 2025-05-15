"use client";

// import { FormEvent, useState } from "react";
//
// interface FormData {
//   fullName: string;
//   studentId: string;
//   email: string;
//   department: string;
// }
//
// export default function RegisterEventPage() {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     studentId: "",
//     email: "",
//     department: "",
//   });
//   const [message, setMessage] = useState("");
//
//   // === STEP 1: Replace these with your actual Google Form details ===
//   // Get your Google Form's POST URL (form action)
//   // ekhane form er jinish copy korsi, | (You can see this in the <meta property="og:url" and in the form embed URL.)
//   const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdYsi8znycWEY9kdh8NPK9RkJtHME2BinexJyQ-wtYaU0MY4w/formResponse";
//
//   // Get your Google Form's field entry IDs (inspect the form fields)
//   const ENTRY_FULLNAME = "entry.125437881";
//   const ENTRY_EMAIL = "entry.974703656";
//   const ENTRY_STUDENTID = "entry.1276808594";
//   const ENTRY_DEPARTMENT = "entry.1465142362";
//   // ================================================================
//
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setMessage("");
//     try {
//       const formBody = new URLSearchParams({
//         [ENTRY_FULLNAME]: formData.fullName,
//         [ENTRY_STUDENTID]: formData.studentId,
//         [ENTRY_EMAIL]: formData.email,
//         [ENTRY_DEPARTMENT]: formData.department,
//       });
//       await fetch(GOOGLE_FORM_ACTION_URL, {
//         method: "POST",
//         mode: "no-cors", // Google Forms requires no-cors
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formBody.toString(),
//       });
//       setMessage("Registration submitted successfully!");
//       setFormData({
//         fullName: "",
//         studentId: "",
//         email: "",
//         department: "",
//       });
//     } catch (error) {
//       setMessage("There was an error submitting the form. Please try again.");
//     }
//   };
//
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//           Event Registration
//         </h1>
//         <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 mb-8">
//           <iframe
//             src="https://docs.google.com/forms/d/e/1FAIpQLSdYsi8znycWEY9kdh8NPK9RkJtHME2BinexJyQ-wtYaU0MY4w/viewform?embedded=true&hl=en"
//             style={{ minHeight: 900, width: '100%', height: 1100 }}
//             frameBorder={0}
//             marginHeight={0}
//             marginWidth={0}
//             title="Event Registration - Google Form"
//           >
//             Loading…
//           </iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function RegisterEventPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Event Registration
        </h1>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 mb-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdYsi8znycWEY9kdh8NPK9RkJtHME2BinexJyQ-wtYaU0MY4w/viewform?embedded=true&hl=en"
            style={{ minHeight: 900, width: '100%', height: 1100 }}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Event Registration - Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}

