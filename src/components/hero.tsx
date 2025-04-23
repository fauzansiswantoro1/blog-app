"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[500px] bg-gradient-to-b from-amber-100 to-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 text-center md:text-left">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-800 shad">
            HotCoffee☕
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Brewing stories, one sip at a time ☕ <br className="hidden sm:inline" />
            Your daily dose of fresh thoughts & bold insights.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">
            
            <Link href="/blog" className=" shadow-xl bg-amber-700 text-white px-2 py-2 rounded-xl hover:bg-amber-300 hover:text-black font-bold">
                Read Blog
              
            </Link>
            <Link href="/about" className=" shadow-xl bg-amber-700 text-white px-2 py-2 rounded-xl hover:bg-amber-300 hover:text-black font-bold">
                About Blog
            </Link>
          </div>
        </div>

        {/* Optimized Image using Next.js Image Component */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
            <Image
              src="/coffee.png" // Ensure this image is placed in your /public directory
              alt="Coffee Cup"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
