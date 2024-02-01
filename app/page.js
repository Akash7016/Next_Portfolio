'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { Container } from "postcss";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achivements from "./components/Achivements";
import { useEffect, useRef, useState } from "react";


export default function Home() {
 
    

  return (
    <main className="bg-zinc-900 relative flex min-h-screen flex-col overflow-hidden">
      <div className="fixed w-full">
     <Navbar/>
      </div>
     <div className="px-4 mt-[7rem] sm:mt-[7rem]">
      <Hero/>
      <Achivements/>
      <About/>
      <ProjectSection/>
      <EmailSection/>
     </div>
     <Footer/>
    </main>
  );
}
