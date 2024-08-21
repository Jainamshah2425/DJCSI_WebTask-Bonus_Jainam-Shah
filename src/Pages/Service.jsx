import React ,{useRef}from 'react'
import { color, motion ,useScroll,useInView} from 'framer-motion';
import p1 from  '../assets/p1.png';
import p2 from  '../assets/p2.png';
import p3 from  '../assets/p3.png';
import p4 from  '../assets/p4.png';
import p5 from  '../assets/p5.png';
import p6 from  '../assets/p6.png';
import p7 from  '../assets/p7.png';
import p9 from  '../assets/p9.png';
import {BrowserRouter as Link,useNavigate } from 'react-router-dom';

const Service = () => {
 const ref= useRef(null);
 const slid = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  
};
const isInView = useInView(ref, { threshold: 0.5 });
  useScroll({
    target:'',
    offset:["0 1","1.33 1"]
  });
  const navigate = useNavigate();
    
  

  return (
    <>
   <motion.div 
        initial={{opacity:0 ,x:200}}
        whileInView={
         {opacity:1,x:0 }
        }
       
       transition={{duration:3 }}
        
      
      
      className="bg-white p-10 rounded-lg shadow-md  "
 
   >
      <div className='grid grid-cols-3 h-auto gap-3 mx-2 overflow-hidden'>
        <div className=' px-12 py-4'>
        <h1>
          <strong>
            We do our best <br /> facilities provide you
          </strong>
        </h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Animi, tenetur vero alias maxime sunt nobis error, quidem similique velit </h3>

        <button className=' my-12 bg-green-600  rounded-3xl py-3 px-2 cursor-pointer   font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] 
          active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'onClick={() => navigate('/contact')}  >
          Contact Now
        </button>
       </div>
       <div className='  grid grid-cols-2 grid-row-2 gap-3 overflow-hidden'>
        <motion.div 
       whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#A9F5D0'
      }}
        className=' w-54 h-54  rounded-lg grid grid-row-2 border border-stone-300'>
             <div className='py-5'>
             <img src={p1} alt="p1" className='mx-20 mt-2' />
             </div>
            <div className=''>
            <h1 className=' mx-12 text-sm cursor-pointer 'onClick={() => navigate('/contact')}>
              Private Workspace
            </h1>
            </div>       
        </motion.div>
       
        <motion.div 
       whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#A9F5D0'
      }} className=' w-54 h-54  rounded-lg  grid grid-row-2 border border-stone-300'>
             <div className='py-5'>
             <img src={p2} alt="p1" className='mx-20 mt-2' />
             </div>
            <div className=''>
            <h1 className=' mx-20 text-sm relative mb-4'onClick={() => navigate('/contact')}>
              Parking Area
            </h1>
            </div>       
        </motion.div>
        
        
        <motion.div 
        whileHover={{
         scale: 1.1,
         transition: { duration: 0.2 },
         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
         backgroundColor: '#A9F5D0'
       }}
        
        className=' w-54 h-54  rounded-lg  grid grid-row-2 border border-stone-300'>
             <div className='py-5'>
             <img src={p5} alt="p1" className='mx-20 mt-2' />
             </div>
            <div className=''>
            <h1 className=' mx-16'onClick={() => navigate('/contact')}>
              Free Electricity
            </h1>
            </div>       
        </motion.div>
        <motion.div 
       whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#A9F5D0'
      }}
        
        
        className=' w-54 h-54  rounded-lg  grid grid-row-2 border border-stone-300'>
             <div className='py-5'>
             <img src={p6} alt="p1" className='mx-20 mt-2' />
             </div>
            <div className=''>
            <h1 className=' mx-16'onClick={() => navigate('/contact')}>
              Swimming Pool
            </h1>
            </div>       
        </motion.div>
          
        </div>
        <div className='grid grid-cols-2 grid-row-2 gap-2 overflow-hidden'> 
        <motion.div 
       whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#A9F5D0'
      }}
        
        className=' w-54 h-54  rounded-lg  grid grid-row-2 border border-stone-300'>
             <div className='py-5'>
             <img src={p3} alt="p1" className='mx-20 mt-2' />
             </div>
            <div className=''>
            <h1 className=' mx-20'onClick={() => navigate('/contact')}>
              Breakfast            </h1>
            </div>       
        </motion.div>
        <motion.div 
       whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#A9F5D0'
      }} className=' w-54 h-54  rounded-lg  grid grid-row-2 border border-stone-300'>
             <div className='py-5'>
             <img src={p4} alt="p1" className='mx-20 mt-2' />
             </div>
            <div className=''>
            <h1 className=' mx-16'onClick={() => navigate('/contact')}>
              Free Wifi
            </h1>
            </div>       
        </motion.div>
        <motion.div 
       whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#A9F5D0'
      }}
        
        className=' w-54 h-54  rounded-lg  grid grid-row-2 border border-stone-300'>
             <div className='py-5'>
             <img src={p7} alt="p1" className='mx-20 mt-2' />
             </div>
            <div className=''>
            <h1 className=' mx-16'onClick={() => navigate('/contact')}>
              Excercise Space
            </h1>
            </div>       
        </motion.div>
        <motion.div 
       whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#A9F5D0'
      }}
          className=' w-54 h-54  rounded-lg  grid grid-row-2 border border-stone-300'>
             <div className='py-5'>
             <img src={p9} alt="p1" className='mx-20 mt-2' />
             </div>
            <div className=''>
            <h1 className=' mx-16'onClick={() => navigate('/contact')}>
              Other Space
            </h1>
            </div>       
        </motion.div>
        
        </div>
        </div>
       
        
   </motion.div>

     </> 
  
  )
}

export default Service
