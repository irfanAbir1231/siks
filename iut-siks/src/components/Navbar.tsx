"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/blogs", label: "Blog" },
    { href: "/prayer-times", label: "Prayer Times" },
    { href: "/daily-reminders", label: "Daily Reminders" },
  ];

  return (
    <nav className="bg-white shadow dark:bg-gray-900">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              IUT-SIKS
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex flex-col lg:flex-row lg:mx-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`my-2 lg:my-0 lg:mx-4 text-sm transition-colors duration-300 transform
                      ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              {/* Login or User Profile */}
              <Link
                href="/auth/login"
                className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
