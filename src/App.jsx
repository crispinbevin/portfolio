import { useEffect, useState } from 'react'
import './App.css'
import HoverLink from './components/HoverLink';
import resume from './assets/crispinResume.pdf'
import { FaExternalLinkAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReact, FaCss3Alt, FaHtml5, FaPython, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiTensorflow, SiKeras, SiPandas, SiNumpy } from "react-icons/si";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaX } from 'react-icons/fa6';

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
      <div className="section bg-zinc-900 min-h-screen text-white font-inter ">
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
              <div className="text-zinc-600 text-3xl">Final Year Computer Science Student</div>
            </div>
            <div className="text-zinc-400 mr-90 max-lg:mr-32 max-sm:mr-8 leading-9">
              Full-stack developer and AI/ML enthusiast, crafting sleek apps with React, Python, and machine learning. Currently at home leveling up my stack and sharpening my edge — open to joining a team/organization where I can build cool things that matter. When I'm not coding, I'm either moving heavy circles around, bumping my head to vibrating air, or pointing and clicking at moving pixels very quickly.
            </div>
          </div>
          <div className="pointer bg-amber-50 w-[30px] rounded-full mb-8 self-center flex px-2" onClick={scrollToSkills}><MdKeyboardDoubleArrowDown size='30px' color='black'/></div>
        </div>

        <div id="skills" className="section skills text-white">
          <div className="wrapper xl:mx-32 max-sm:mx-4 pt-4 ">
            <div className="content mt-18">
              <div className="font-code text-4xl font-bold text-zinc-300">Skills</div>
              <div className="list mt-12">
                
                <div className="list-wrapper mx grid grid-cols-3 max-md:grid-cols-1 gap-12">
                  <div className="list-thing flex flex-col gap-8 p-8 hover:bg-zinc-800 transition-all duration-300 rounded-2xl">
                    <div className="font-inter font-bold text-2xl">Machine Learning</div>
                    <div className="text-zinc-400 leading-6">Building smart models with <span className='text-zinc-100 font-bold'>TensorFlow, Keras, and Scikit-learn</span> for classification, prediction, and automation. Skilled in CNN, XGBoost, and Decision Trees, with experience in optimizing models through hyperparameter tuning and transfer learning. Passionate about computer vision using OpenCV for tasks like pose detection and image processing.</div>
                    <div className="flex gap-6 flex-wrap">
                      <FaPython size={50} fill='#4b8bbe'/>
                      <SiTensorflow size={50} fill='#ff9200'/>
                      <SiKeras size={50} fill='#c90000'/>
                    </div>
                  </div>
                  <div className="list-thing flex flex-col gap-8 p-8 hover:bg-zinc-800 transition-all duration-300 rounded-2xl">
                    <div className="font-inter font-bold text-2xl">Web Development</div>
                    <div className="text-zinc-400 leading-6">React developer who loves building sleek, fast, and responsive UIs with <span className='text-zinc-100 font-bold'>React</span> and <span className='text-zinc-100 font-bold'>Tailwind</span>. Big on clean code, reusable components, and smooth user experiences. Always experimenting with new tech, optimizing performance, and making the web a better place—one component at a time.</div>
                    <div className="flex gap-6 flex-wrap">
                      <FaReact size={50} fill='#00d2f7'/>
                      <RiTailwindCssFill size={50} fill='#00bbff'/>
                      <RiJavascriptFill size={50} fill='#f9dc43'/>
                    </div>
                  </div>
                  <div className="list-thing flex flex-col gap-8 p-8 hover:bg-zinc-800 transition-all duration-300 rounded-2xl">
                    <div className="font-inter font-bold text-2xl">Data Science</div>
                    <div className="text-zinc-400 leading-6">Transforming raw data into meaningful insights using <span className='text-zinc-100 font-bold'>Pandas, NumPy, and SciPy</span>. Experienced in data wrangling, preprocessing, and feature engineering to enhance model accuracy. Skilled in data visualization with Matplotlib, Seaborn, and Plotly to communicate findings effectively.</div>
                    <div className="flex gap-6 flex-wrap">
                      <SiPandas size={50} fill='#212a82'/>
                      <SiNumpy size={50} fill='#4ba6c9'/>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="footer section">
          <div className="wrapper h-24 text-white flex justify-center items-center shadow-sm">
            <div className="icons flex gap-2">
              <a href="https://github.com/crispinbevin" className="font-bold rounded-2xl p-2 hover:transform hover:translate-y-[-1px] hover:translate-x-[1px] hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all duration-300">
                <FaGithub
                size={30}
                />
              </a>
              <a href="https://www.linkedin.com/in/crispin-bevin-5353b6309/" className="font-bold rounded-2xl p-2 hover:transform hover:translate-y-[-1px] hover:translate-x-[1px] hover:shadow-sm hover:shadow-white hover:cursor-pointer transition-all duration-300">
                <FaLinkedin
                size={30}
                />
              </a>

            </div>
            

          </div>
      </div>
    </>
  );
}

export default App
