"use client"
import React, { useState,useRef } from 'react'
import ProjectTag from './ProjectTag'
import ProjectCard from './ProjectCard';
import {motion, useInView } from "framer-motion"


const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

  

function ProjectSection() {
    const [tag, settag] = useState('All');
    const handleChange = (title) =>{
        settag(title);
    }

     const filteredCard = projectsData.filter((project)=> project.tag.includes(tag))

    const ref = useRef(null)
    const isInView = useInView(ref,{once:true});

    const changeVariant = {
      initial : {y:50, opacity:0},
      animate : {y:0,opacity:1}
    }
     

    
  return (
    <div >
        <h2 className='text-white text-center font-bold text-xl mb-8'>My Projects</h2>
        <div className='flex flex-row justify-center items-center gap-8 mb-8'>
        <ProjectTag selectedTag={()=>handleChange('All')} active={tag == 'All'} name='All'/>
        <ProjectTag selectedTag={()=>handleChange('Web')} active={tag == 'Web'} name='Web'/>
        <ProjectTag selectedTag={()=>handleChange('Mobile')} active={tag == 'Mobile'} name='Mobile'/>
        </div>

        <div ref={ref} className='grid sm:grid-cols-3 gap-8 sm:gap-12'>
        {
            filteredCard.map((project,index)=>(
              <motion.div variants={changeVariant} initial='initial' animate={isInView ? 'animate' : 'initial'} transition={{delay:index*0.4,ease:'easeInOut'}}>
                <ProjectCard title={project.title} description={project.description} gitUrl={project.gitUrl} tag={project.tag}/>
              </motion.div>

            ))
        }
        </div>

        
        
    </div>
  )
}

export default ProjectSection