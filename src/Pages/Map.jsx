import React, { useEffect,useRef } from 'react';
import{motion,useInView,useAnimation} from 'framer-motion';
import s1 from '../assets/s1.png';

const Map = () => {
   const ref =useRef(null);
   
    

  return (
    <>
      <div className='   '>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15095.627457923854!2d72.81584424444297!3d18.935516165842543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e71360b0c5%3A0x710e8dfe75aca32b!2sChurchgate%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723835739033!5m2!1sen!2sin" 
      width="1200" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
      className='rounded-xl w-full mt-12  '/>
      <motion.div 
      initial={{opacity:0 ,x:-200}}
       whileInView={ {opacity:1,x:0 }}
      transition={{duration:0.5}}
       
      
      
      
      className='grid grid-cols-2 relative bottom-52 mx-20 bg-white overflow-y-hidden'>
        <div className='mx-12 '>
        <h1 className='my-8  text-3xl overflow-hidden'>
            <strong>
                Location of Our Hotel
            </strong>
        </h1>
        <h3 className='my-8'>
            Churchgate,Mumbai,India
        </h3>
       

        </div>
        <div className=' grid grid-row-2'>
          <div className=''>

          </div>
          <div className=''>
          <h1>
          <input type="email" placeholder="Enter your email"  className="ml-80 text-black bg-gray-100 w-60 h-9 my-5 rounded-lg">
          
          </input>
          <button className='bg-green-500 cursor-pointer  ml-80       rounded-2xl border-2  h-10 overflow-hidden  px-3 py-2 font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] 
          active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'onClick={ () => {window.alert("we will contact you soon")}}>
            Contact
          </button>
          </h1>
          </div>
         
        </div>
      </motion.div>
        <motion.div 
    
        initial={{ opacity: 0, y: '300' }}
        whileInView={{opacity:1,y:0}}
        transition={{ duration: 4 }}
        
        
        className='grid grid-cols-4  '>
            <div className=' mx-16'>
              <h1 className='mt-16'>Lorem ipsum is simply dummy text <br></br> of the printing and typesetting industry
               </h1>
              <img className='h-8 my-12' src={s1}/>
            
            </div>
            <div className=' text-center my-5'>
              <h1>Home</h1>
              <ul className='my-5 '>
                <li>Booking</li>
                <li className='my-2'>Facilities</li>
                <li className='my-2'>Location</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div className=' text-center my-5 mr-28'>
              <h1>Help</h1>
              <ul className='my-5 '>
                <li>About Us</li>
                <li className='my-2'>Help center</li>
                <li className='my-2'>Privacy Policy</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div className=' text-center my-5 mr-52'>
              <h1>Get the app</h1>
              <ul className='my-5 '>
                <li>Ios app</li>
             
                <li className='my-2'>Android app</li>
                
              </ul>
            </div>
            
            
     </motion.div>
      
      </div>
      
    </>
  )
}

export default Map
