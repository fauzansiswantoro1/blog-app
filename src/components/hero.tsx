"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-[500px] bg-gradient-to-b from-amber-100 to-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-800">
            HotCoffee☕
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Brewing stories, one sip at a time ☕ <br className="hidden sm:inline" />
            Your daily dose of fresh thoughts & bold insights.
          </p>
        </div>

        {/* Optimized Image using Next.js Image Component */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[300px] h-[300px]">
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
