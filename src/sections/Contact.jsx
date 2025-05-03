import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const Contact = () => {

  return (
    <>
    <div id='contact' className='bg-white w-full'>
       <div id='about ' className='lg:w-[80%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[5-px] mx-auto  '>
               
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[60%] w-full flex flex-col justify-center  items-start gap-6 '
            >
            <motion.h1
            variants={slideUpVariants}
            className='text-yellow-500 text-2xl'
            >CONTACT US</motion.h1>
            <motion.h1
            variants={slideUpVariants}
            className='text-black uppercase text-[40px] font-bold'
            >reach us for any query</motion.h1>
            <div className='w-[120px] h-[6px]  bg-yellow-500 '></div>
            <p className='w-[90%] mx-auto text-3xl italic text-gray-600 mt-[60px]'>We are the leader with 25 years of experience in the construction market!</p>
            </motion.div>
       
       
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[40%] w-[90%] mx-auto flex flex-col justify-center items-start gap-6 '
            >
            <motion.form 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex flex-col justify-center items-start gap-4 w-full'
            >
            <input type='text' placeholder='Enter Fullname' className='px-6 py-3 border-[2px]  border-black text-black rounded-lg w-full'/>
            
            <input type='email' placeholder='Enter Email' className='px-6 py-3 border-[2px]  border-black text-black rounded-lg w-full'/>
            <input type='number' placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px]  border-black text-black rounded-lg w-full'/>
            <textarea name='' placeholder='Enter your message' id='' rows="4" className='px-6 py-3 border-[2px]  border-black text-black rounded-lg w-full'></textarea>
            <motion.button
            variants={zoomInVariants}
            className='bg-yellow-500  hover:bg-black hover:text-white px-8 py-4 text-black rounded-lg w-full'
            >SUBMIIT

            </motion.button>

                
 
            </motion.form>
            
            </motion.div>
             </div>
             </div>
    </>
  )
}

export default Contact
