import Helmet from "react-helmet";
import MatrixRainingCode from "../../components/matrix_rain/matrix";
import cat from '../../assets/cat.jpeg'

const AboutPage = () => {


    return ( 
        
        <div >
            
            <MatrixRainingCode/>
             
<div class="  static px-10 py-20 pt-20 left-[4rem] top-[5rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ml- mr-10 my-20 pt-0 ">
<img className=' relative  top-0 left-0 sm:w-[300px] lg:w-[500px] w-[300px] ' src={cat} alt="" />
        <div className=" text-white text-4xl font-bold ">
            About me:
        </div>
        <div className="text-white  ">
Hi, I'm Cesare Sabattini Manginella, a 20 years old italian physics student with the fondness for programming.
I've started coding mainly for data analisis in C++, and this pushed me to learn more.
During the last year I've put myself all in, in order to become a freelancer web developer: I started as a frontend,
but soon I got into backend, which gave me a wider vision: I got into web securty and database management, mainly with MongoDB, 
and developed a lot of MERN stack applications, thanks to the wide documentation on the internet.
After completing many different tasks, i feel confident with all of these topics, and I'm willing
to learn more on the road.
        </div>
         </div>
         
        </div>
     );
}
 
export default AboutPage;