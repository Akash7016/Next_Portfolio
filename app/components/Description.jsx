import { motion } from 'framer-motion';
import React from 'react'


function Description({active,selectTab,children}) {
    const buttonClass = active ? "text-white " : 'text-zinc-500';
    
  return (
    
   <button onClick={selectTab} className={` hover:text-white' ${buttonClass}`}>
    <p className='font-semibold'>{children}</p>
    {active && <motion.div initial={{opacity:0,width:0,scale:0.5}} animate={{scale:1,opacity:1,width: "100%"}} className='h-1 bg-[#ff941b]'></motion.div>}
    
   </button>
  )
}

export default Description