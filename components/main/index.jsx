import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link';

export default function Main() {
  return (
    <div className='w-full text-center h-screen' id='home'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#f96d00]'>Kursat</span></h1>
            <h1 className='text-gray-700'>A Front-end Web Developer</h1>
            <p className= 'text-sm py-4 text-gray-600 max-w-[80%] lg:max-w-[70%] lg:text-base m-auto'>As an ambitious web developer, I'm constantly seeking out new challenges and opportunities to grow my skills. 
            I'm always eager to learn new technologies and tools, as I believe that continuous learning is key to staying competitive in the fast-paced world of web development.
            </p>
         
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href='https://www.linkedin.com/in/kursatkeskinn/' target='_blank'>
                <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300'>      
                <FaLinkedin />
                </div>
                </Link>

                <Link href='https://github.com/Kursatkeskin96' target='_blank'>
                <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300'>
                    <FaGithub  />
                </div>
                </Link>

                <Link href='https://twitter.com/kursatkesk' target='_blank'>
                <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300'>
                    <FaTwitter />
                </div>
                </Link>

                <Link href='#contact'>
                <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300'>
                    <BsFillPersonLinesFill />
                </div>
                </Link>

            </div>
        </div>
      </div>  
    </div>
  )
}
