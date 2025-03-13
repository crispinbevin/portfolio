import { useEffect, useState } from 'react'
import './App.css'
import HoverLink from './components/HoverLink';
import resume from './assets/newResume.pdf'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill, RiVercelFill, RiJavascriptFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <div className="section bg-zinc-900 min-h-screen text-white font-inter">
        <div className={`navbar max-sm:p-3 p-5 flex justify-end items-center ${isScrolled ? 'scrolled' : ''}`}>
          <div className="elements flex gap-8 items-center">
            <div className="hover:cursor-pointer" onClick={scrollToSkills}><HoverLink text='Skills'/></div>
            <div className=""><a className='flex gap-3 bg-white text-black font-bold rounded-2xl px-6 py-3 hover:transform hover:translate-y-[-2px] hover:translate-x-[2px]  hover:shadow-lg hover:shadow-accent hover:cursor-pointer transition-all duration-300' href={resume} target="_blank" rel="noopener noreferrer">Resume <FaExternalLinkAlt /></a></div>
          </div>
        </div>
        <div className="main-wrapper xl:mx-64 max-xl:mx-32 max-sm:mx-8 pt-32 flex flex-col justify-between lg:min-h-[100vh]">
          <div className="content flex flex-col gap-10">
            <div className="font-code font-bold text-2xl ml-1 text-zinc-300">
              Hi, my name is
            </div>
            <div className="font-inter text-8xl max-md:text-6xl flex flex-col gap-6 font-extrabold">
              <div className="div">Crispin Jithin Bevin</div>
              <div className="text-zinc-600 text-3xl">Computer Science Student</div>
            </div>
            <div className="text-zinc-400 mr-90 max-lg:mr-32 max-sm:mr-8 leading-9">
              Full-stack developer and AI/ML enthusiast, crafting sleek apps with React, Python, and machine learning. Currently sharpening my skills at <a className='text-zinc-50 hover:text-secondary duration-150' href="https://ferns-it.in/" target="_blank" rel="noopener noreferrer">FERNS IT</a>. When I'm not coding, I'm either moving heavy circles around, bumping my head to vibrating air or pointing and clicking at moving pixels very quickly.
            </div>
          </div>
          <div className="pointer bg-amber-50 w-[30px] rounded-full mb-8 self-center flex px-2" onClick={scrollToSkills}><MdKeyboardDoubleArrowDown size='30px' color='black'/></div>
        </div>

        <div id="skills" className="section skills text-white">
          <div className="wrapper xl:mx-64 max-xl:mx-32 max-sm:mx-8 pt-4 ">
            <div className="content mt-18">
              <div className="font-code text-3xl font-bold text-zinc-300">Skills</div>
              <div className="list mt-12">
                <div className="list-wrapper">
                  <div className="list-thing flex flex-col gap-8">
                    <div className="font-inter font-bold text-2xl">Full Stack Web Developer</div>
                    <div className="text-zinc-400 leading-6">React developer who loves building sleek, fast, and responsive UIs with React and Tailwind. Big on clean code, reusable components, and smooth user experiences. Always experimenting with new tech, optimizing performance, and making the web a better place—one component at a time.</div>
                    <div className="flex gap-6">
                      <FaReact size={64} fill='#00d2f7'/>
                      <RiTailwindCssFill size={64} fill='#00bbff'/>
                      <RiJavascriptFill size={64} fill='#f9dc43'/>
                      <FaHtml5 size={64} fill='#fc4f13'/>
                      <FaCss3Alt size={64} fill='#264de4'/>
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
