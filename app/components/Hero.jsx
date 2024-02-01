"use client"
import Image from 'next/image'
import React from 'react'
import hero from '../../public/hero.png'
import grad from '../../public/gradient.jpg'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'
import { motion } from "framer-motion"

function Hero() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-12 sm:px-32 sm:mb-24 '>
        <motion.div initial={{scale:0.5, opacity:0}} animate={{scale:1,opacity:1}} transition={{ease:'easeIn'}} className='sm:justify-self-start sm:text-left col-span-8 place-self-center text-center'>
            <h2 className='text-4xl md:text-6xl font-bold text-white'>
            <span className="sm:leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#ff941b] to-[#ff3f4f] ">
              Hello, I  m{" "}
            </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Akash',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'UI / UX Designer',
                  1000,
                  'Frontend Developer',
                  1000,
                  'Video Editor',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              </h2>
          
              <p className="text-[#676767] mb-6 mt-3 sm:mt-6 sm:text-lg   ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptuous.
              </p>

              <div>
                <Link href='/contact' className='sm:w-fit px-6 py-3 rounded-full w-full mr-8 text-white mb-5 inline-block bg-gradient-to-r from-[#ff941b] to-[#ff3f4f]'>Hire Me</Link>
                <Link href='/' className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#ff941b] to-[#ff3f4f]  mt-3'>
                  <span className='block bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 rounded-full px-5 py-2 '>Download now</span>
                  </Link>
              </div>
            
        </motion.div>
        
        <motion.div initial={{scale:0.5, opacity:0}} animate={{scale:1,opacity:1}} transition={{ease:'easeIn'}} className=" place-self-center mt-6 sm:place-self-end col-span-4">
            <Image
           src={hero}
           className="  w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]  rounded-full"/>
        </motion.div>
    </div> 
  )
}

export default Hero