"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">
            PatentPilot
          </h1>
        </Link>

        <ul className="flex gap-8 text-lg">

          <li>
            <Link
              href="/"
              className="hover:text-blue-200 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/history"
              className="hover:text-blue-200 transition"
            >
              History
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-blue-200 transition"
            >
              About
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}