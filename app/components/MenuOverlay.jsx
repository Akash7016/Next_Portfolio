import React from 'react'
import Navlinks from './Navlinks'

function MenuOverlay({links}) {
  return (
    <div className='bg-zinc-900 opacity-90 flex flex-col items-center px-7 py-2 text-white'>
        {
            links.map((link,index)=>(
                <Navlinks key={index} href={link.path} name={link.title}/>
            ))
        }
    </div>
  )
}

export default MenuOverlay