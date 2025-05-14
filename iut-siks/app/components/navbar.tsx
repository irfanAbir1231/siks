"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, useAuth, useUser, SignOutButton } from '@clerk/nextjs';

// Temporary auth state (replace with your auth solution)
const isLoggedIn = false;
const username = "Abdullah";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnim, setMenuAnim] = useState<null | "in" | "out">(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blogs" },
    { name: "Prayer Times", href: "/prayer-times" },
    { name: "Daily Reminders", href: "/daily-reminders" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-green-100 dark:border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <span className="text-2xl">🕌</span>
              <span>IUT-SIKS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Auth Buttons/Profile */}
            <div className="flex items-center ml-4 space-x-4">
              {isSignedIn ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30">
                    <span>👤</span>
                    <span>{user?.username || user?.firstName || "User"}</span>
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 w-48 mt-2 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl hidden group-hover:block border border-green-100 dark:border-green-900">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30"
                    >
                      Profile
                    </Link>
                    <SignOutButton>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30"
                      >
                        Logout
                      </button>
                    </SignOutButton>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <SignInButton>
                    <button className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-lg transition-colors">
                      Login
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md">
                      Register
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                if (!isMenuOpen) {
                  setIsMenuOpen(true);
                  setMenuAnim("in");
                } else {
                  setMenuAnim("out");
                }
              }}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {(isMenuOpen || menuAnim === "out") && (
        <div
          ref={menuRef}
          className={`md:hidden ${
            menuAnim === "in" ? "animate-scale-fade-in" : ""
          } ${menuAnim === "out" ? "animate-scale-fade-out" : ""}`}
          onAnimationEnd={() => {
            if (menuAnim === "out") {
              setIsMenuOpen(false);
              setMenuAnim(null);
            } else if (menuAnim === "in") {
              setMenuAnim(null);
            }
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMenuAnim("out")}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            {isSignedIn ? (
              <>
                <Link
                  href="/profile"
                  className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuAnim("out")}
                >
                  Profile
                </Link>
                <SignOutButton>
                  <button
                    className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setMenuAnim("out")}
                  >
                    Logout
                  </button>
                </SignOutButton>
              </>
            ) : (
              <div className="space-y-2 pt-2">
                <Link
                  href="/auth/login"
                  className="block px-3 py-2 rounded-lg text-center text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuAnim("out")}
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="block px-3 py-2 rounded-lg text-center text-base font-medium bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setMenuAnim("out")}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
