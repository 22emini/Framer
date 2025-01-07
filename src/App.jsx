import React from 'react'
import{motion} from 'framer-motion'
import { Teaching } from './assets/components/Teaching'
const App = () => {
  return (
 <>
 <div>
  <h2 className="text-3xl font-bold bg-black text-white pt-10 text-center">
    Scroll reveal Aninmatiom in react using framer motion
  </h2>
  <motion.div
  initial ={{opacity: 0, scale: 0}}
  whileInView={{opacity: 1, scale: 1}}
  transition={{duration: 2, type:'spring'}}
  className=" w-full bg-black h-screen p-40 text-white">
    <h1 className=" text-4xl font-bold"> section one</h1>
    <p className=' text-lg '>Hey! I am The First section</p>
  </motion.div>
  <motion.div 
  
  initial ={{opacity: 0, translateX:"-100%"}}
  whileInView={{opacity: 1, translateX:0}}
  transition={{duration: 2, type:'spring'}}
  
  
  className=" w-full bg-blue-400 h-screen p-40 text-black">
     <h1 className=" text-4xl font-bold"> section two</h1>
    <p className=' text-lg '>Hey! I am The Second section</p>
 </motion.div>
 <motion.div 
 initial ={{opacity: 0, rotateX:"90deg"}}
 whileInView={{opacity: 1, rotateX:0}}
 transition={{duration: 3, type:'spring'}}
 
 className=" w-full bg-green-400 h-screen p-40 text-white">
    <h1 className=" text-4xl font-bold"> section three</h1>
    <p className=' text-lg '>Hey! I am The Third section</p>
    </motion.div>
 </div>
 <Teaching />
 </>
  )
}

export default App