"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", path: "/" },
    { name: "All Product", path: "/all-product" },
    { name: "Add Product", path: "/add-product" },
    { name: "My Card", path: "/my-card" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-slate-100 backdrop-blur-lg">
      <header className="flex items-center gap-15 px-3 w-[90%] md:container mx-auto py-3">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-950">
            Techlust
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {tabs.map((tab) => (
            <li className="text-2xl font-semibold" key={tab.name}>
              <Link href={tab.path}>{tab.name}</Link>
            </li>
          ))}
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <Link href={tab.path} className="block py-2">
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
