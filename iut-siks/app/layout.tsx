import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IUT-SIKS",
  description:
    "Society of Islamic Knowledge Seekers - Islamic University of Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main className="w-full px-0">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
