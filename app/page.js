"use client"



import AnimatedSignature from "./components/AnimatedSignature";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Intro from "./components/Intro";
import LeftSocialLinks from "./components/LeftSocialLink";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

import Test from "./sub-components/Test";
import MovingText from "./sub-components/MovingText";
import Practice from "./components/PracticeSection/Practice";



export default function Home() {
  return (
   <div className="overflow-x-hidden relative w-full">
     

<Navbar />
   <LeftSocialLinks />
   <Test />
    <Intro />
    <Skills />
  
    <Services />
   <MovingText /> 
   
    <Testimonial />
    <Contact />
    
   
    <Features />
    
    
  
    <BlogPost />
    <Projects />
   
    <AnimatedSignature />

<Practice />
  
   
   </div>
  );
}
