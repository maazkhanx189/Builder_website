import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation' 
import building from '../assets/assets/building.svg'
import construction from '../assets/assets/construction.svg'
import design from '../assets/assets/design.svg'
import document from '../assets/assets/document.svg'
import paint from '../assets/assets/paint.svg'
import support from '../assets/assets/support.svg'


const Services = () => {
  
 const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

  return (
 <>
  <div id='services' className='w-full bg-white' >
  <motion.div
  initial="hidden"
  whileInView="visible"
  variants={slideUpVariants}
  className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px] '
  >
   <motion.h1 
   variants={slideUpVariants}
   className='text-yellow-500 text-2xl'
   >SPECIAL OFFER </motion.h1>
   <motion.h1
   variants={slideUpVariants}
   className='text-black uppercase text-[40px] font-bold text-center'
   >our best services</motion.h1>
   <motion.div
   variants={slideUpVariants}
   className='w-[120px] h-[6px] bg-yellow-500'
   ></motion.div>
   {/* mak div for services mapping from export js file */}
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={zoomInVariants}
    className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start  gap-[20px] mt-[30px]'
    >
    {
      allservices.map((item,index)=>(
        <motion.div
        variants={zoomInVariants}
        className='flex justify-center items-start gap-5 
         p-4 '
         key={index}>
         <img src={item.icon} alt='icon'
         className='w-[100px] border-2 border-yellow-500  hover:bg-yellow-500 rounded-lg p-2  '/>
         <div className='flex flex-col justify-center items-start gap-3'>
          <h1 className='text-xl font-bold text-balance '>{item.title}  </h1>
          <p className='text-[18px]'>{item.about}</p>
         </div>
        
         </motion.div>
      ))
    }

    </motion.div>
  </motion.div>

  </div>
 </>
  )
}

export default Services
