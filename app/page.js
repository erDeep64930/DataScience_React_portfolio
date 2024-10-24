import AnimatedSignature from "./components/AnimatedSignature";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import LetsTalk from "./components/LetsTalk";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import SocialLink from "./sub-components/SocialLink";


export default function Home() {
  return (
   <div className="overflow-x-hidden relative w-full">
    <Navbar />
    <SocialLink />
    <Intro />
    <Skills />
    <Services />
    <LetsTalk />
    <Testimonial />
    <BlogPost />
    <Projects />
    <Contact />
    <AnimatedSignature />

   </div>
  );
}
