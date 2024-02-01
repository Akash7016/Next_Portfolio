import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

function ProjectCard({title,description,gitUrl,tag,}) {
  return (
    <div  > 
            <div className='h-64 bg-slate-400 rounded-t-xl mb-2 overflow-hidden group'>
            <div className='bg-black w-full h-full bg-opacity-0 group-hover:bg-opacity-80 transition-all relative '>
                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full  hidden group-hover:flex  transition-all duration-500 '>
                <Link
                    href={gitUrl}
                    className="h-10 w-10  mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                    <CodeBracketIcon className="h-6 w-6  text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link>
                <Link
                    href={gitUrl}
                    className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                    <EyeIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link>
                

                </div>
            </div>
            </div>
            <div>
                <h2 className='font-semibold text-white'>{title}</h2>
                <p className='text-zinc-400'>{description}</p>
            </div>

        </div>
  )
}

export default ProjectCard