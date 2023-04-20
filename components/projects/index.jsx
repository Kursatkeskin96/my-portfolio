import Image from 'next/image'
import React from 'react'
import Quiz from '../../public/assets/projects/quiz.png'
import Weather from '../../public/assets/projects/weatherapp.png'
import Recipe from '../../public/assets/projects/recipeapp.png'
import Visit from '../../public/assets/projects/visitmanchester.png'
import Javascript from '../../public/assets/skills/javascript.png'
import Html from '../../public/assets/skills/html.png'
import Css from  '../../public/assets/skills/css.png'
import Reactjs from  '../../public/assets/skills/react.png'
import Bootstrap from '../../public/assets/skills/bootstrap.png'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className='w-full p-2 mb-32' id='projects'>
    <div className='max-w-[80%] mx-auto flex flex-col justify-center h-full'>
       <h2 className='py-4 text-gray-600 border-b-2 border-orange-200'>Projects</h2>
       <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto gap-8'>
        
       <div className=' hover:scale-105 duration-300 ease-in py-3 px-3 my-8 rounded-lg max-w-sm bg-white shadow-xl shadow-gray-400'>
      <Image src={Quiz} alt='quiz' />
      <h3 className=' my-2'>Quiz App</h3>
      <p className='my-2'>This JavaScript project showcases my ability to create interactive web applications with a timer and 3-heart system that penalizes incorrect answers. </p>
        <hr />
        <div className='flex justify-start py-2'>
        <Image className='mx-1' src={Html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Javascript} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Bootstrap} alt='javascript' width={16} height={16} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
            <Link href='https://github.com/Kursatkeskin96/Quiz-App' target="_blank" >
        <button>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://kursatsquizapp.netlify.app' target="_blank" >
        <button>Live</button>
        </Link>
        </div>
        </div>
       </div>
       <div className=' hover:scale-105 duration-300 ease-in py-3 px-3 my-8 rounded-lg max-w-sm h-fit bg-white shadow-xl shadow-gray-400'>
      <Image src={Weather} alt='quiz' />
      <h3 className=' my-2'>Weather App</h3>
      <p className='my-2'>This weather app fetches real-time data from an API to display accurate weather information. It has taught me how to work with APIs, ability to fetch real-time data and integrate it into my web applications.</p>
        <hr />
        <div className='flex justify-start py-2'>
        <Image className='mx-1' src={Html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Javascript} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Bootstrap} alt='javascript' width={16} height={16} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
          <Link href='https://github.com/Kursatkeskin96/weather-app' target="_blank" >
        <button>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://kursatsweatherapp.netlify.app' target="_blank" >
        <button>Live</button>
        </Link>
        </div>
        </div>
       </div>
       <div className=' hover:scale-105 duration-300 ease-in py-3 px-3 my-8 rounded-lg max-w-sm h-fit bg-white shadow-xl shadow-gray-400'>
      <Image src={Recipe} alt='quiz' />
      <h3 className=' my-2'>Recipe App</h3>
      <p className='my-2'>This project features a recipe app with data fetched from a JSON file which i wrote. It incorporates a dynamic React routing system and a visually appealing JS carousel.</p>
        <hr />
        <div className='flex justify-start py-2'>
        <Image className='mx-1' src={Html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Javascript} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Bootstrap} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Reactjs} alt='javascript' width={16} height={16} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
          <Link href='https://github.com/Kursatkeskin96/recipeapp' target="_blank" >
        <button>Code</button>
       </Link>
        </div>
        <div className='px-2'>
        <Link href='https://kursatsrecipeapp.netlify.app' target="_blank" >
        <button>Live</button>
        </Link>
        </div>
        </div>
       </div>
       <div className=' hover:scale-105 duration-300 ease-in py-3 px-3 my-8 rounded-lg max-w-sm h-fit bg-white shadow-xl shadow-gray-400'>
      <Image src={Visit} alt='quiz' />
      <h3 className=' my-2'>Visit Manchester</h3>
      <p className='my-2'>This project showcases my ability to create responsive and dynamic websites using React, featuring impressive JavaScript animations and advanced routing systems. </p>
        <hr />
        <div className='flex justify-start py-2'>
        <Image className='mx-1' src={Html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Javascript} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Bootstrap} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={Reactjs} alt='javascript' width={16} height={16} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
          <Link href='https://github.com/Kursatkeskin96/visitmanchester' target="_blank" >
        <button>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://visitmanchester.netlify.app' target="_blank" >
        <button>Live</button>
        </Link>
        </div>
        </div>
       </div>
      </div>
      </div>
      </div>
  )
}
