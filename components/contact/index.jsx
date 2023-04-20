'use client';
import Link from 'next/link'
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {GrContact} from 'react-icons/gr'


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ut3xmem', 'template_3jkagod', form.current, 'tGF9oprXEkoV0KmnQ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='py-8 w-full lg:h[700px] bg-[#222831]' id='contact'>
    <div className='max-w-[80%] mx-auto flex flex-col justify-center'>
      <h2 className='py-6 border-b-2 border-orange-200 text-white'>Contact</h2>
  
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='my-10 bg-[#f2f2f2] p-8'>
          <div className='inline-flex items-center text-center text-xl mb-6'>
            <AiOutlineMail />
            <span className='ml-4'>E-Mail</span>
          </div>
          <p className='text-[#f96d00]'>kursatkeskinn@gmail.com</p>
          
          <div className='inline-flex items-center text-center text-xl mt-6 mb-6'>
            <AiOutlinePhone />
            <span className='ml-4'>Phone</span>
          </div>
          <p className='text-[#f96d00]'>+44 7480 7351 01</p>
          
          <div className='inline-flex items-center text-center text-xl mt-6 mb-6'>
            <GoLocation />
            <span className='ml-4'>Location</span>
          </div>
          <p className='text-[#f96d00]'>Manchester, United Kingdom</p>
          
          <div className='inline-flex items-center text-center text-xl mt-6 mb-6'>
            <GrContact />
            <span className='ml-4'>Social Media</span>
          </div>
          <div className='flex text-xl'>
          <Link href='https://www.linkedin.com/in/kursatkeskinn/' target='_blank'>
            <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110  ease-in duration-300'>
                <FaLinkedinIn />
            </div>
            </Link>

            <Link href='https://github.com/Kursatkeskin96' target='_blank'> 
            <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110  ease-in duration-300 mx-3'>
                <FaGithub />
            </div>
            </Link>

            <Link href='https://twitter.com/kursatkesk' target='_blank'> 
            <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110  ease-in duration-300'>
                <FaTwitter />
            </div>
            </Link>

            <Link href='https://instagram.com/kursatkesk' target='_blank'> 
            <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110  ease-in duration-300 mx-3'>
                <FaInstagram />
            </div>
            </Link>

            <Link href='https://github.com/Kursatkeskin96' target='_blank'>
            <div className='rounded-full border-b border-orange-400 shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110  ease-in duration-300'>
                <FaGithub />
            </div>
            </Link>
            
          </div>
        </div>
  
        <div className='my-10 bg-white p-8'>
  <form ref={form} onSubmit={sendEmail}>
    <div className='mb-6'>
      <label className='block text-lg uppercase tracking-wide text-gray-700 font-semibold mb-2'>
        Full Name
      </label>  
      <input 
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        type='text' 
        placeholder='Enter your full-name ' 
        required 
        name='user_name'
      />
    </div>
    <div className='mb-6'>
      <label className='block text-lg uppercase tracking-wide text-gray-700 font-semibold mb-2'>
        Email Address
      </label>
      <input 
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        type='email' 
        placeholder='Enter Your E-Mail' 
        required 
        name='user_email'
      />
    </div>
    <div className='mb-6'>
      <label className='block text-lg uppercase tracking-wide text-gray-700 font-semibold mb-2'>
        Message
      </label>
      <textarea 
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        rows='6' 
        placeholder='Enter your message here...' 
        required 
        name='message'
      ></textarea>
    </div>
    <div className='flex justify-end'>
      <button 
        className='bg-[#f96d00] hover:bg-[#f39f5f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
        type='submit'
        value='Send'
      >
        Send Message
      </button>
    </div>
  </form>
</div>
</div>
</div>
</div>
  )
}
