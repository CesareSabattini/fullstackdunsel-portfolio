import Hero from "../../components/hero/Hero";
import MatrixRainingCode from "../../components/matrix_rain/matrix"
import { BiRupee } from 'react-icons/bi';
import ProjectCard from "../../components/project-card/ProjectCard";
import ItemsSlider from "../../components/card-scrolling/itemSlider";
import About from "../../components/about-me/About";
import { SocialIcon } from 'react-social-icons'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const projects = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
        { title: 'Item 3' },
        { title: 'Item 3' },
        { title: 'Item 3' },
      ];
      const navigate= useNavigate();
    return ( 
    
     

    <div>
      <div className="h-[700px]">
         <MatrixRainingCode/>

         <Hero/>
         <div className="text-start">
<a href="#Contacts " >
         <button className="bg-green-500 hover:bg-green-700 text-gray-900  hover:text-white font-bold py-2 px-4 rounded-full px-6 mx-3 
         border-4 border-gray-700 mx-9 mt-10
        " >
           Contact me
        </button>
        </a>
        
        <button className="bg-green-500 hover:bg-green-700 text-gray-900  hover:text-white font-bold py-2 px-4 rounded-full px-6 mx-3 
         border-4 border-gray-700
        "
        onClick={()=>{navigate('/products')}} >
           What I offer
        </button>
  

         </div>

         </div>
         <div className="h-[500px] pb-[500px]">
<About/>
</div>
         <div className="bg-black">
            
 <ItemsSlider title="Main Projects:">
      {projects.map((project, index) => (
        <span key={index}>
          <ProjectCard/>
        </span>
      ))}
    </ItemsSlider>
    </div>

<div className="text-white my-[150px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 px-8 pb-20 mx-10">
  <div className="font-boldtext-start glowing font-bold text-4xl text-start">
  About Me:
  </div>
  <div className="">
  Hi, I'm Cesare Sabattini Manginella, a 20 years old italian physics student with the fondness for programming.
I've started coding mainly for data analisis in C++, and this pushed me to learn more.
During the last year I've put myself all in, in order to become a freelancer web developer: I started as a frontend,
but soon I got into backend, which gave me a wider vision: I got into web securty and database management, mainly with MongoDB, 
and developed a lot of MERN stack applications, thanks to the wide documentation on the internet.
After completing many different tasks, i feel confident with all of these topics, and I'm willing
to learn more on the road.
  </div>
</div>
    <div className="bg-black text-white my-[150px]  px-12 pt-12 mb-0 pb-20 ">
     <span id="Contacts" className="font-bold text-4xl">Contacts:</span>
<ol className="mt-12 grid grid-cols-2 lg:grid-cols-4 grid-raws-2 lg:grid-raws-2 gap-4 ">
<li className="text-start justify-start"> 
<div className=" flex justify-center">
  <a href="https://it.fiverr.com/cesaresabattini">
<svg  xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="-2.5 -2 24 24"><g fill="currentColor"><path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"/> </g></svg>
</a>
</div>
<div>@cesaresabattini</div>
</li> 

<li className="text-start">
<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className=" flex justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"/><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"/><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"/><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"/></svg>
</a>
<div>
  cesaresabattini2003@gmail.com
</div>

</li>

<li>

<div className=" flex justify-center">
<SocialIcon url="www.github.com" /> 
</div>
<div className=" flex justify-center">
 @CesareSabattini
 </div>
</li>

</ol>
      </div>


        </div>

     );
}
 
export default HomePage;