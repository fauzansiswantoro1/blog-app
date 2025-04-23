"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Importing social media icons

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-amber-700 text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 sm:px-8">
        {/* Footer Content */}
        <div className="text-sm font-bold">
          <p>&copy; {new Date().getFullYear()} Fauzan Siswantoro. All rights reserved.</p>
        </div>
        {/* Social Links */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/muhamad-fauzan-siswantoro-798a60207/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/fauzansiswantoro1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/fauzansiswantoro1/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
