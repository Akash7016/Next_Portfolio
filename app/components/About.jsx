'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import pc from '../../public/pc.png'
import Description from './Description'

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc  ">
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc ">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      ),
    },
    {
      title: "Certification",
      id: "certification",
      content: (
        <ul className="list-disc ">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];

function About() {
    const [tab, settab] = useState('skills')
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
          settab(id);
        });
      };

  return (
    <div className='text-white grid grid-cols-1 mt-10 sm:grid-cols-12 sm:px-32 sm:mt-40 sm:mb-40 mb-10 '>
        <div className='col-span-7'>
            <Image className='rounded-sm sm:w-[500px] sm:h-[400px]' src={pc} />
        </div>

        <div className='col-span-5 mt-12 sm:m-0'>
            <div>
            <h2 className='font-bold text-xl mb-8'>About Me</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae blanditiis natus excepturi exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum inventore aut, reiciendis nesciunt nam eum ullam labore natus iusto molestias. Doloremque incidunt corrupti voluptate temporibus.</p>
            </div>
            <div className='flex flex-row gap-8 mt-8 mb-8'>
                <Description selectTab={()=>handleTabChange('skills')}  active={tab=='skills'}>skills</Description>
                <Description selectTab={()=>handleTabChange('education')}  active={tab=='education'}>education</Description>
                <Description selectTab={()=>handleTabChange('certification')}  active={tab=='certification'}>certification</Description>
            </div>
            <div className='pl-4'>
            {TAB_DATA.find((t)=>t.id==tab).content}
            </div>

        </div>
    </div>
  )
}

export default About