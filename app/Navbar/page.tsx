"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-pink-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl">
          Sparkle Elegances
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/services" className="text-white">
            Services
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
          <Link href="/gallery" className="text-white">
            Gallery
          </Link>
        </div>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/services" className="text-white">
            Services
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
          <Link href="/gallery" className="text-white">
            Gallery
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
