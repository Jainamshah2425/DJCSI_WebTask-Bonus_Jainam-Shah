import React from 'react';
import { motion } from 'framer-motion';
import into from '../assets/intro.png';
import ss from '../assets/ss.png';
import {BrowserRouter as Link,useNavigate } from 'react-router-dom';

const Intro = () => {
  const containerVariants = {
    hidden: { x: '10vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const navigate = useNavigate();

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ delay: 0.2 }}
      className='bg-blue-50 h-auto rounded-md grid grid-cols-2'
    >
     
      <motion.h1
        variants={childVariants}
        className="text-7xl font-bold mt-9 mx-20 py-10"
      >
        Find your Perfect <br></br>
        place to stay

        <h3 className='font-normal text-sm my-12'>
          Lorem ipsum is simply text of the printing and typesetting industry
        </h3>
         <h4 className='text-sm flex overflow-y-hidden hover:bg-green-400 w-48' onClick={() => navigate('/contact')}>
            <img className="size-12  -my-4 cursor-pointer overflow-hidden overflow-y-hidden" src={ss} onClick={() => navigate('/contact')}/>Watch video
         </h4>

       

        
      </motion.h1>
      <motion.img  initial="hidden"
      animate="visible"
      variants={imageVariants}
      transition={{ duration: 0.5 }}
      className='mx-32 size-fit'
      src={into}/>
    </motion.div>
   
    </>
  );
};

export default Intro;