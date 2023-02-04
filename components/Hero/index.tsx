/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center ">
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}

        transition={{
          duration: 2.5,
        }}
        className='relative flex justify-center top-20 items-center z-0'
      >
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'></div>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'></div>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52'></div>
        <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'></div>
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'></div>
      </motion.div>
      <img className='relative rounded-full h-80 w-80 shadow-lg mx-auto object-cover z-10' src={'me2.png'} alt='' />
      <div className='z-10'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>FRONT-END DEVELOPE</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          Hi, my name is Bernardino
        </h1>
        <div className='pt-5 space-x-2'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>

          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero