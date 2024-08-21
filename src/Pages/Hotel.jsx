import React from 'react'
import { motion } from 'framer-motion';
import h1 from '../assets/house1.png';
import h2 from'../assets/house2.png';
import h3 from '../assets/house3.png';
import rat from '../assets/rating.png';
import {BrowserRouter as Link,useNavigate } from 'react-router-dom';
import { ParallaxLayer } from 'parallax-js';
const Hotel = () => {
   const navigate = useNavigate(); 

  return (
    <>
    <div className='  '>
      
      
        <h1 className='overflow-y-hidden  mx-7 h- text-3xl '>
            <strong>
            Our most popular Hotels
            </strong>
        
        </h1>
        
        <span className='grid grid-cols-2 gap-96'>
        <h3  className='my-6 mx-7'>
        Lorem ipsum is simply text of the printing and typesetting industry
        

        </h3>
       
        <span className='  ml-96'>
        <button className=' my-5  mx-2
         bg-green-600  rounded-3xl py-3 px-2 cursor-pointer   font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] 
          active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none
        ' onClick={()=> navigate('/ViewAll')}>
            View All
        </button>
        </span>
        
        </span>
        <motion.div
        initial={{opacity:0 }}
        whileInView={ {opacity:1 }}
       transition={{duration:2}}
        className='grid grid-cols-3 mx-20 overflow-y-hidden'>
            
            
            
            <motion.div
             className='w-96 bg-stone-100 h-auto '
             whileHover={{
                scale:1.1
             }}
              >             
               <img src={h1} alt="Hotel1" className='h-64 w-96' />
                 <div className='mx-4'>
                    <h3 className='text-green-600  my-2'>London NW8 7JT England</h3>
                    <h1 className=' text-2xl my-3'>Danubis Hotel Regents Park</h1>
                    <h4 className='my-5 overflow-y-hidden'>$200 Per Night  <img className='mx-28  -mt-5' src={rat}/> </h4>
                                 
                     </div>
                     </motion.div>
 

                 <motion.div
              className='w-96 bg-stone-100 h-auto '
              whileHover={{
                scale:1.1
             }}
               >
               <img src={h2} alt="Hotel1" className='h-64 w-96' />
                 <div className='mx-4'>
                    <h3 className='text-green-600  my-2'>London NW8 7JT England</h3>
                    <h1 className=' text-2xl my-3'>The Resident Soho</h1>
                    <h4 className='my-5 overflow-y-hidden'>$200 Per Night  <img className='mx-28  -mt-5' src={rat}/> </h4>
                 
                 
                 </div>
                        </motion.div>


                 <motion.div
             className='w-96 bg-stone-100 h-auto '
             whileHover={{
                scale:1.1
             }}
              >
               <img src={h3} alt="Hotel1" className='h-64 w-96' />
                 <div className='mx-4'>
                    <h3 className='text-green-600  my-2'>London NW8 7JT England</h3>
                    <h1 className=' text-2xl my-3'>London Bridge Hotel</h1>
                    <h4 className='my-5 overflow-y-hidden'>$200 Per Night  <img className='mx-28  -mt-5' src={rat}/> </h4>
                 
                 
                 </div>
                 </motion.div>
                
                 </motion.div>













                
            
        




      
      
    </div>
    </>
    
  )
}

export default Hotel
