import React from 'react'

function ProjectTag({name,active,selectedTag}) {
    const buttonStyle = active ? 'text-white border-orange-500' : 'text-[#ADB7BE] border-slate-600 hover:border-white'
  return (
    <div >
            <button onClick={selectedTag} className={`${buttonStyle} border-2 rounded-full px-5 py-1 `}>{name}</button>
            
        </div>
  )
}

export default ProjectTag