import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-md px-4 py-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} IUT-SIKS. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <Link
                href="/terms"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Terms of Service
              </Link>
              <span>·</span>
              <Link
                href="/privacy"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
