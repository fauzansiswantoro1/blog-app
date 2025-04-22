"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Logout from "./logout";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const AuthLinks = () => (
    <>
      <p className="px-2 text-white font-bold">{session?.user?.name}</p>
      <Link href="/" className="nav-link hover:text-black">Home</Link>
      <Link href="/about" className="nav-link hover:text-black">About</Link>
      <Link href="/blog" className="nav-link hover:text-black">Blog</Link>
      <Link href="/blog/create" className="nav-link bg-white text-amber-700 px-2 py-2 rounded-xl hover:bg-teal-500 hover:text-white font-bold">➕ Create</Link>
      <Logout />
    </>
  );

  const GuestLinks = () => (
    <>
      <Link href="/" className="nav-link hover:text-black">Home</Link>
      <Link href="/about" className="nav-link hover:text-black">About</Link>
      <Link href="/blog" className="nav-link hover:text-black">Blog</Link>
      <Link href="/login" className="nav-link  bg-white text-amber-700 px-2 py-2 rounded-xl hover:bg-teal-500 hover:text-white font-bold">Login</Link>
      <Link href="/register" className="nav-link  bg-white text-amber-700 px-2 py-2 rounded-xl hover:bg-teal-500 hover:text-white font-bold">Register</Link>
    </>
  );

  return (
    <nav className=" sticky bg-amber-500 text-white px-6 py-4 flex items-center justify-between top-0 z-50">
      <div className="text-xl font-bold">HotCoffee☕</div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 items-center">
        {status === "authenticated" ? <AuthLinks /> : <GuestLinks />}
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-amber-900 flex flex-col gap-4 p-4 md:hidden">
          {status === "authenticated" ? <AuthLinks /> : <GuestLinks />}
        </div>
      )}
    </nav>
  );
}
