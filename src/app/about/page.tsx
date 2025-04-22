'use client'

import Image from "next/image"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">About Us☕</h1>

      {/* Blog History Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Blog History</h2>
        <p className="text-gray-700 leading-relaxed">
          Our blog began as a passion project in 2020 with the goal of sharing insightful articles on technology, lifestyle, and personal growth. Initially, it started as a small space for the author to jot down ideas, but over time it grew into a community of like-minded readers and contributors. The blog has undergone several redesigns and expansions to cater to a broader audience while staying true to its core values of knowledge-sharing, inspiration, and creativity.
        </p>
      </section>

      {/* Branding HotCoffee Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Branding HotCoffee</h2>
        <p className="text-gray-700 leading-relaxed">
          At HotCoffee, we believe in the power of conversation, connection, and sharing ideas over a warm cup of coffee. Our brand embodies a welcoming, cozy, and thoughtful space where people come together to explore ideas that matter. Just like a cup of coffee, our content is rich, bold, and designed to spark new perspectives. Whether youre here for insightful articles, tech trends, or just a dose of inspiration, HotCoffee is your place to relax, learn, and grow.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Our brand colors – the warm amber and coffee-inspired tones – reflect our passion for creativity and authenticity. We focus on providing high-quality content in a visually clean and modern design, ensuring an engaging experience for our readers. Our mission is not only to inform but also to inspire a sense of community and encourage open dialogue.
        </p>
      </section>

      {/* Author Bio Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Author Bio</h2>
        <div className="flex items-center gap-6">
          {/* Author Image */}
          <div className="w-400 h-100 relative">
            <Image
              src="/author.jpeg"
              alt="Author"
              className="rounded-full object-cover"
              fill
            />
          </div>
          {/* Author Info */}
          <div>
            <h3 className="text-xl font-bold">Muhamad Fauzan Siswantoro</h3>
            <p className="text-sm text-gray-600">Founder & IT Enthusiast</p>
            <p className="text-gray-700 mt-2">
            Im a versatile tech enthusiast with experience in data analysis, system rollout, and business analysis. Ive worked on national implementation projects with PT Astra Graphia Information Technology and contributed to healthcare tech systems at Siloam Hospital Group. Passionate about turning data into insights, I enjoy exploring tech trends, problem-solving, and bringing value to users through thoughtful system design. Outside of work, you will likely find me designing graphics or playing badminton. I thrive on learning and love meaningful collaboration—ideally over a good cup of coffee.            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mission and Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-2">Mission</h3>
            <p className="text-gray-700">
              Our mission is to inspire and educate our readers by providing insightful and thought-provoking content. We aim to help our audience stay informed about the latest trends, improve their personal growth, and lead a more creative life. Through our blog, we strive to foster a community of knowledge-seekers and passionate individuals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-2">Vision</h3>
            <p className="text-gray-700">
              Our vision is to become a trusted and influential source of knowledge for individuals looking to improve their personal and professional lives. We envision building a community that shares ideas, supports one another, and collectively contributes to the evolution of creativity, technology, and self-development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-4">
          We would love to hear from you! Whether you have feedback, questions, or just want to connect, feel free to reach out to us through any of the following channels:
        </p>
        <div className="flex gap-6">
          {/* Social Media Links */}
          <a href="https://x.com/Fa_ojan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-fauzan-siswantoro-798a60207/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/fauzansiswantoro1" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
            <FaGithub size={30} />
          </a>
        </div>
        
      </section>
    </div>
  )
}
