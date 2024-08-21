import React, { useState } from 'react';
import {motion} from 'framer-motion'

function Contact() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  const containerVariants = {
    hidden: { x: '10vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

 

  return (
    <div
    
    
    className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-800 to bg-green-400">
      <motion.div 
    initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ delay: 0.2 }}
       className="bg-white p-10 rounded-lg shadow-md w-96">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 mt-2"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md mt-4">Login</button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
