"use client"
import React, { useState } from 'react'
import Navlinks from './Navlinks'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'


function Navbar() {

    const linkList = [
        {
            title : "About",
            path : "/about"
        },
        {
            title : "Projects",
            path : "/projects"
        },
        {
            title : "Contact",
            path : "/contact"
        },
    ]
        
    const [isMenuClick, setisMenuClick] = useState(false)

    const handleMenu = ()=>{
        setisMenuClick((prev)=>prev = !prev);
    }
    
  return (
    
    <div className='absolute top-0 left-0  w-full flex flex-col'>

    
    
    <div className='flex justify-between items-center bg-zinc-950 text-white py-5 px-7'>
       
        <Link href="/">
        <h2 className='font-extrabold'>LOGO</h2>
        </Link>

        <div >
            <button onClick={()=>handleMenu()} className='w-8 h-8 rounded-full flex justify-center items-center bg-white md:hidden'>
               {isMenuClick ? <XMarkIcon className='w-5 h-5 text-zinc-950' /> : <Bars3Icon className='w-5 h-5 text-zinc-950'/> } 
            </button >
        </div>
        
        <div className='hidden gap-14 md:flex md:visible '>
        {
           linkList.map((link,index)=>(
            <Navlinks key={index} href={link.path} name={link.title}/>
           ))
        }
        </div>
        
        
        
    </div>
    {
        isMenuClick && <MenuOverlay links={linkList}/> 
    }
    

    </div>

  )
}

export default Navbar