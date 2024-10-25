import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import {useState } from "react";

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover =(index: any)=>{
        cards[index].start({y: "0"})
    }

    const handleHoverEnd =(index: any)=>{
        cards[index].start({y: "100%"})
    }

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
            <h1 className='text-7xl tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
        <div className='cards w-full flex gap-12 mt-10'>
                <motion.div 
                onHoverStart={()=>handleHover(0)}
                onHoverEnd={()=>handleHoverEnd(0)}
                 className='cardcontainer relative w-1/2 h-[75vh] '>
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-["Founders_Grotesk_X_Condensed"] text-9xl'>
                    {"FYDE".split('').map((item, index)=>
                    <motion.span 
                    initial={{y: "100%"}} 
                    animate={cards[0]} 
                    transition={{ease: [0.21, 1, 0.36, 1], delay: index*.05}}
                    className='inline-block'
                    >{item}</motion.span>
                    )}
                    </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div
                 onHoverStart={()=>handleHover(1)}
                 onHoverEnd={()=>handleHoverEnd(1)}
                className='cardcontainer relative w-1/2 h-[75vh] '>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full top-1/2 -mr-3 -translate-y-1/2 z-[9] leading-none  font-["Founders_Grotesk_X_Condensed"] text-9xl'>
                    {"VISE".split('').map((item, index)=>
                    <motion.span 
                    initial={{y: "100%"}} 
                    animate={cards[1]} 
                    transition={{ease: [0.21, 1, 0.36, 1], delay: index*.05}}
                    className='inline-block'
                    >{item}</motion.span>
                    )}
                    </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </motion.div>

        </div>
        </div>
       
    </div>
  )
}

export default Featured