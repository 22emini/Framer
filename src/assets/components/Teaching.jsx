import React from 'react'
import {motion} from "framer-motion"
export const Teaching = () => {
  return (
   <>
   <div className=" flex flex-col gap-7 overflow-x-hidden">
    <motion.section  
    show={{opacity}}
    
    className=" grid grid-cols-3 p-10 gap-10">
 <div className=" bg-slate-800 aspect-square roun-lg justify-center flex-items-center gap-10"></div>
 <div className=" bg-slate-800 aspect-square roun-lg justify-center flex-items-center gap-10"></div>
 <div className=" bg-slate-800 aspect-square roun-lg justify-center flex-items-center gap-10"></div>
 <div className=" bg-slate-800 aspect-square roun-lg justify-center flex-items-center gap-10"></div>
 <div className=" bg-slate-800 aspect-square roun-lg justify-center flex-items-center gap-10"></div>
 <div className=" bg-slate-800 aspect-square roun-lg justify-center flex-items-center gap-10"></div>
 

      
    </motion.section>

   </div>
   </>
  )
}
