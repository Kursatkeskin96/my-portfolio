import React from 'react'
import aboutpng from '../../public/assets/about/3d-about.png'
import Image from 'next/image'

export default function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16' id='about'>
        <div className='max-w-[80%] m-auto md:grid grid-cols-3 gap-8 '>
            <div className='col-span-2'>
                <h2 className='py-4 text-gray-600 border-b-2 border-orange-200'>About Me</h2>
                <p className='py-2 text-gray-600'> Hi there! I'm a self-taught web developer based in 
                Manchester, UK, who has been on a learning journey since October 2022. With a focus on 
                creating responsive web applications, I've been honing my skills and expanding my k
                nowledge base, always eager to learn and grow. Using React JS and Next JS for development 
                and Tailwind CSS for styling.</p>
                    
                <p className='py-2 text-gray-600'>As someone who is naturally ambitious, I'm always 
                striving for new heights and setting new goals for myself. My passion for development and
                 problem-solving drives me to find innovative solutions and constantly improve my craft. 
                 I love staying up-to-date on the latest technologies and applying them to my projects - 
                 it's one of the things that keeps me motivated and engaged.</p>

                 <p className='py-2 text-gray-600'>In the near future, I'm excited to expand my skillset 
                 even further by learning Node JS, MongoDB, and Express JS to achieve a MERN stack 
                 proficiency. Thanks for stopping by and feel free to reach out if you have 
                 any questions or would like to collaborate!</p>    
            </div>
            <div  className='w-full h-auto m-auto sflex items-center justify-center p-4'>
                <Image 
                src={aboutpng}
                alt='about pic'
                />
            </div>
        </div>
    </div>
  )
}
