
import React from 'react'
import { motion } from 'framer-motion';


const Details = () => {
    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
  
    const childVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-800 to bg-green-400">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white p-10 rounded-lg shadow-md w-96"
        >
          <h1 className="text-3xl font-bold text-center mb-4 overflow-hidden">Contact Us</h1>
          <div className="text-center">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={childVariants}
              className="text-gray-700"
            >
              Address: 123 Main Street, City, State, Zip
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={childVariants}
              className="text-gray-700"
            >
              Phone: (123) 456-7890
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={childVariants}
              className="text-gray-700"
            >
              Email: contact@example.com
            </motion.p>
          </div>
        </motion.div>
      </div>
    );
  };
  export default Details