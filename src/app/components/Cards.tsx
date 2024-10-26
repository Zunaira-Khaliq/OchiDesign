import React from 'react'
import Image from 'next/image'

function Cards() {

   const imageUrl1 = "https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
   const imageUrl2 = "https://ochi.design/wp-content/uploads/2022/04/logo002.svg"


  return (
    <div className='w-full h-screen  bg-zinc-900 flex items-center px-28 gap-5'>
        <div className='cardContainer  h-[50vh] w-1/2 '>
           <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
              <img 
              className='w-32 ' 
              src={imageUrl1} 
              alt="card1" />
              <button className='absolute px-5 py-[1px] -mb-5 -mx-5 border-2 rounded-full left-10 bottom-10'>&copy;2019-2022</button>
           </div>
        </div>
        <div className='cardContainer flex gap-5 h-[50vh] w-1/2'>
           <div className='card relative w-1/2 h-full rounded-xl bg-[#1e3d3a] flex items-center justify-center'>
              <img 
              className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" 
              alt="card2"/>
              <button className='absolute px-3 py-[1px] -mb-5 -mx-5 border-2 rounded-full left-10 bottom-10 text-sm'>RATING 5.0 ON CLUTCH</button>
           </div>
           <div className='card relative w-1/2 h-full rounded-xl bg-[#1e3d3a] flex items-center justify-center'>
              <Image 
              className='w-32 ' 
              src={imageUrl2} 
              alt="card2"
              width={128}
              height={800} />
              <button className='absolute px-2 py-[1px] -mb-5 -mx-7 border-2 rounded-full left-10 bottom-10 text-sm'>BUSINESS BOOTCAMP ALLUMNI</button>
           </div>
        </div>
    </div>
  )
}

export default Cards