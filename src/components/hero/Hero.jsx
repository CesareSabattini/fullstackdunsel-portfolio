import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
    return (  
<div className=" text-white pt-20 text-start">
      <div className="text-xl font-bold">
      <div className="text-3xl xl:text-6xl sm:text-5xl md:text-5xl lg:text-5xl text-start px-10 font-bold">
          
          <Typewriter
            words={['Hi, I am Cesare,']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            delaySpeed={1000}
          />
        </div>
        <div className="text-3xl xl:text-6xl sm:text-5xl md:text-5xl lg:text-5xl text-start px-10 font-bold">
          
          <Typewriter
            words={['a physics student and','a full stack developer']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={50}
           
          />
        </div>
      </div>  
        </div>
       
    );
}
 
export default Hero;