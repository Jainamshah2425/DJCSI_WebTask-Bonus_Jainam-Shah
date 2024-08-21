import React,{useState} from 'react';
import {BrowserRouter as Link,useNavigate } from 'react-router-dom';
import Contact from './Contact';
import {motion} from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  
  
      
  return (
    <>
    <nav className='flex '>
         <h1 className='text-2xl px-16'>
            <strong>
            Lorem Ipsum
            </strong>
          
         </h1>
         <div>
         <ul className=' mx-52 my-2 items-center grid grid-cols-6 gap-16 cursor-pointer  '>
           
            <li className='hover:bg-green-500  rounded-xl'onClick={() => navigate('/login')} >Booking </li>
            <li className='hover:bg-green-500 rounded-xl'onClick={() => navigate('/login')} >Facilities</li>
            <li className='hover:bg-green-500 rounded-xl'onClick={() => navigate('/login')}>About Us</li>
            <li className='hover:bg-green-500 rounded-xl'onClick={() => navigate('/login')}>Location</li>
            <li className='hover:bg-green-500 rounded-xl'onClick={() => navigate('/contact')}>Contact</li>
            </ul>
            
                <button className='  absolute top-1 right-0 bg-green-600  rounded-3xl py-1 px-2 cursor-pointer   font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] 
          active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'onClick={() => navigate('/login')} >
                  
                   Login 
                  
                </button>
              
                </div>
                
    </nav>
   
    </>
  )
}

export default Navbar
