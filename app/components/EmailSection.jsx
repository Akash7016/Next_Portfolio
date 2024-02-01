"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import github from '../../public/github.png'
import Linkedin from '../../public/linkedin.png'
import Link from 'next/link'

function EmailSection() {
    const [emailsubmitted, setemailsubmitted] = useState(false)
    
    const handleMail = async (e) => {
        e.preventDefault();
        const data = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        console.log(response)
        const resData = await response.json();
    
        if (response.status === 200) {
          console.log("Message sent.");
          setemailsubmitted(true);
        }
      };

    return (
    <div className='sm:mt-32 h-full sm:mb-32 mt-10 mb-10 grid sm:grid-cols-2  gap-12 sm:px-32 relative '>
        <div className='place-self-center z-10'>
            <h2 className='font-bold text-xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#ff941b] to-[#ff3f4f]'>Let's Connect</h2>
            <p className='text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor repudiandae blanditiis odio ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos.</p>
            <div className='flex gap-6 justify-center items-center mt-20 text-white'>
               <Link href='/'>
                    <Image className='fill-white' width={30} height={30} src={github}/>
               </Link>
               <Link href='/'>
                    <Image width={30} height={30} src={Linkedin}/>
               </Link>
            </div>

        </div>
        <form onSubmit={handleMail} className='flex flex-col z-10 '>
            <div className='flex flex-col'>
                <label className='text-white mb-2 font-semibold' htmlFor="Email">Your Email</label>
                <input className='mb-8 rounded-md p-2 outline-none' name='email' id='email' type="email" placeholder='Enter your email' />
            </div>
            <div className='flex flex-col'>
                <label className='mb-2 text-white font-semibold' htmlFor="Subject">Subject</label>
                <input className='mb-8 rounded-md p-2 outline-none' name='subject' id='subject' type="text" placeholder='Enter subject' />
            </div>
            <div className='flex flex-col'>
                <label className='mb-2 text-white font-semibold' htmlFor="Message">Message</label>
                <textarea className='mb-8 rounded-md p-2 outline-none' name="message" id="message" cols="30" rows="5" placeholder='type your message here'></textarea>
            </div>

            <div className='px-5 py-2 text-center text-white place-self-center w-full sm:w-fit rounded-full bg-gradient-to-r from-[#ff941b] to-[#ff3f4f]  mt-3'>
                <button type='submit'>Send</button>
            </div>
            
        </form>

        <div className='bg-gradient-radial from-[#ff941b] to-[#ff3f4f] blur-3xl w-96 opacity-15 h-72 z-0 absolute bottom-0 transform -translate-x-1/2 translate-y-1/2'></div>
        
        
    </div>
  )
}

export default EmailSection