import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-[12vw] px-20'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>(
                <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (<motion.div 
                        initial={{width: 0}} 
                        animate={{width: "8vw"}} 
                        transition={{ease:[0.76, 0, 0.24, 1], duration: 1}}
                        className=' mr-[1vw] w-[8vw]  h-[5.2vw] -top-[1vw] relative'>
                             <img className='rounded-md ' src="https://media.istockphoto.com/id/1281026029/photo/illustration-of-man-walking-on-penrose-triangle-surreal-concept.jpg?s=1024x1024&w=is&k=20&c=oVytR-y025ePXt037uAR-CIaHZsxzqJ0wZVuHKrrQiU=" alt="" />
                        </motion.div>)}
                <h1 className="pt-[2vw] -mb-[1vw] font-semibold uppercase text-[8vw] leading-[.75] font-['Founders_Grotesk_X_Condensed']">{item}</h1>
            </div>
            </div>
))}
           
           
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-[4vw] flex justify-between items-center py-4 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>
            <p className='text-md font-light font-["Founders_Grotesk_X-Condensed"]'>{item}</p>
            )}
            <div className='flex gap-3'>
            <div className='start flex items-center gap-5'>
                <div className='px-7 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>Start the project</div>
            </div>
            <div className='w-10 h-10 rounded-full border-[1px] border-zinc-400 font-light flex items-center justify-center '>
                <span className='rotate-[45deg]'> 
                    <FaArrowUpLong/>
                </span>
               
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default LandingPage