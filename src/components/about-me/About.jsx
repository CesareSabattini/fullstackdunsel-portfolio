import mongoImg from '../../assets/mongoDB.png'
import expressImg from '../../assets/express.png'
import ReactImg from '../../assets/react.png'
import NodeImg from '../../assets/nodeJS.png'


const About = () => {
    const MERNImages = [
        { url: mongoImg },
        { url: expressImg },
        { url: ReactImg },
        { url: NodeImg },
      ];


    return (  

        <div className="bg-black my-[30px] py-[40px]">

<div className='text-white font-bold md:text-xl'>Frontend:</div>


<div  className='grid sm:gap-4 md:gap-4 lg:gap-10 gap-2 grid-cols-5 grid-rows-1 items-center my-[20px] font-bold sm:px-[20px] text-sm md:text-lg'>
   
<span className='bg-green-500 md  py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    React
</span>
<span className='bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    HTML5</span>
<span className='bg-green-500  py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    CSS3
</span>
<span className='bg-green-500  py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    Tailwind
</span>
<span className='bg-green-500  py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    Bootstrap
</span>

</div>

<div  className='grid sm:gap-4 md:gap-4 lg:gap-10 gap-2 grid-cols-4 grid-rows-1 items-center mb-[20px] font-bold px-[20px] sm:px-[20px] text-sm md:text-lg'>

<span className=' col-start-2 bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900 '>
    EJS
</span>
<span className='bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    Bootstrap
</span>
   </div>

<div className='text-white font-bold md:text-xl'>Backend:</div>

<div  className='grid sm:gap-4 md:gap-4 lg:gap-10 gap-2 grid-cols-5 grid-rows-1 items-center my-[20px] font-bold px-[20px] text-sm md:text-lg'>
   
<span className='bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    NodeJS
</span>
<span className='bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    Express</span>
<span className='bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    Redux
</span>
<span className='bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    MongoDB
</span>
<span className='bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    mySQL
</span>

</div>

<div  className='grid sm:gap-4 md:gap-4 lg:gap-10 gap-2 grid-cols-4 grid-rows-1 items-center mb-[20px] font-bold px-[20px] text-sm md:text-lg'>

<span className=' col-start-2 bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    PassportJS
</span>
<span className='bg-green-500 py-2 rounded-md border-4 border-gray-700 bg-green-500 text-gray-900'>
    Altro
</span>
   </div>


          
        </div>
    );
}
 
export default About;