'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fefcfb] text-brown-800">
      
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="relative w-24 h-24 mb-6"
      >
        <Image
          src="/coffee.png" 
          alt="Coffee Loading"
          fill
          className="object-contain"
        />
      </motion.div>

      
      <motion.h1
        className="text-2xl font-bold tracking-wide text-center"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Brewing something good...
      </motion.h1>
    </div>
  )
}
