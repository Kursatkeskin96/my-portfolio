
import Image from 'next/image'

import Css from '../../public/assets/skills/css.png'
import Html from '../../public/assets/skills/html.png'
import Javascript from '../../public/assets/skills/javascript.png'
import Reactjs from '../../public/assets/skills/react.png'
import Nextjs from '../../public/assets/skills/nextjs.png'
import Tailwindcss from '../../public/assets/skills/tailwind.png'
import Github1 from '../../public/assets/skills/github1.png'
import Bootstrap1 from '../../public/assets/skills/bootstrap.png'
import Git1 from '../../public/assets/skills/git.png'
import Skillsgif from '../../public/assets/skills/skills.gif'

function Skills({ image }) {
    return (
        <Image src={image} 
        width={64}
         height={64}
         alt='/' />
    );
}

export default function Skillss() {
  return (
    <div className='w-full lg:h-screen p-2 skills-container' id='skills'>
     <div className='max-w-[80%] mx-auto flex flex-col justify-center h-full'>
        <h2 className='py-4 text-gray-600 border-b-2 border-orange-200'>Skills</h2>
        <div className='grid grid-cols-3 text-sm gap-8 py-8'>
        <div className='inline-block w-max-[90px] mx-auto hover:scale-110 duration-300 ease-in text-center items-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>Html</p>
        <Image src={Html} alt='html' width={64} height={64} />
        </div>    
        </div>
        <div className='inline-block mx-auto hover:scale-110 duration-300 ease-in text-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>CSS</p>
        <Image src={Css} alt='html' width={64} height={64} />
        </div>    
        </div>
        <div className='inline-block mx-auto hover:scale-110 duration-300 ease-in text-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>JS</p>
        <Image src={Javascript} alt='html' width={64} height={64} />
        </div>    
        </div>
        <div className='inline-block mx-auto hover:scale-110 duration-300 ease-in text-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>React JS</p>
        <Image src={Reactjs} alt='html' width={64} height={64} />
        </div>    
        </div>
        <div className='inline-block mx-auto hover:scale-110 duration-300 ease-in text-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>Next JS</p>
        <Image src={Nextjs} alt='html' width={64} height={64} />
        </div>    
        </div>
        <div className='inline-block mx-auto hover:scale-110 duration-300 ease-in text-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>Tailwind</p>
        <Image src={Tailwindcss} alt='html' width={64} height={64} />
        </div>    
        </div>
        <div className='inline-block mx-auto  hover:scale-110 duration-300 ease-intext-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>Bootstrap</p>
        <Image src={Bootstrap1} alt='html' width={64} height={64} />
        </div>    
        </div>
        <div className='inline-block mx-auto hover:scale-110 duration-300 ease-in text-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>Git</p>
        <Image src={Git1} alt='html' width={64} height={64} />
        </div>    
        </div>
        <div className='inline-block mx-auto hover:scale-110 duration-300 ease-in text-center px-4 border-b rounded-md shadow-lg shadow-gray-400 border-spacing-6'>
        <div className='p-1'>
        <p>Github</p>
        <Image src={Github1} alt='html' width={64} height={64} />
        </div>    
        </div>
        </div>
     </div>
    </div>
  )
}

