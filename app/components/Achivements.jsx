"use client";
import React from 'react'
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
  });

function Achivements() {

    const achievementsList = [
        {
          metric: "Projects",
          value: "10",
          postfix: "+",
        },
        {
          prefix: "~",
          metric: "Users",
          value: "500000",
        },
        {
          metric: "Awards",
          value: "0",
        },
        {
          metric: "Years",
          value: "1",
        },
      ];
      

  return (
    <div className='sm:px-64 '>
        <div className='text-white flex flex-col sm:flex-row justify-center items-center sm:gap-20 border-2 border-zinc-500  px-20 py-10 rounded-3xl mt-10'>

            
                {achievementsList.map((Achivement,index)=>{
                    return (
                            <div className='flex flex-col  justify-center items-center'>
                                <h2 className='flex flex-row font-bold text-2xl justify-center items-center mb-5'>
                                    {Achivement.prefix}
                                    <AnimatedNumbers
                                        
                                        includeComma
                                        animateToNumber={parseInt(Achivement.value)}
                                        fontStyle={{
                                        fontSize: 40}}
                                        locale = 'en-US'
                                        
                                    />
                                    {Achivement.postfix}
                                    
                                </h2>
                                <p className='text-zinc-300 text-base leading-normal mb-5 sm:mb-0'>{Achivement.metric}</p>
                            </div>
                    )
                })}
                
            


        </div>

    </div>
  )
}

export default Achivements