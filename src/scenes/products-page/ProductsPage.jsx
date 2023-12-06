import {Helmet} from 'react-helmet';
import './products.css'
import MatrixRainingCode from '../../components/matrix_rain/matrix';
import {
Architecture,
Security,
Storage,
PostAdd,
CloudDone,
Image
  } from "@mui/icons-material";

const ProductsPage = () => {
    return (  
        <div>
            <MatrixRainingCode/>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div className=' bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
ml-10 mr-20 my-20 pt-0
'>
    <div className='text-white py-6 '>
    The following packages are only templates: <br />I would be glad to contribute also to other projects. <br />
     <a href='/' className='text-l underline font-bold'>Contact me</a> for custom needs. <br />
    All my services are available on my <a className='text-l underline font-bold' href="https://it.fiverr.com/cesaresabattini"> Fiverr account</a>
    </div>
    </div>

<div className=' bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
ml-10 mr-20 my-20 pt-0 pb-5
'>
        <div className=' glowing font-bold text-4xl text-start px-12 pt-12'>
Fullstack web app

        </div>
<div className='text-white font-bold text-start pl-5'>
I will provide you a fullstack web application, designed for your needs.
<br />
This will include, if needed:
<ol className='leading-10'>
    <li className='text-start'>  <PostAdd/> Up to 10 pages</li>
    <li className='text-start'> <Architecture/> A modern, interactive and original design</li>
    <li className='text-start'> <Storage/> Data Storage system</li>
    <li className='text-start'><Security/> A strong security system</li>
    <li className='text-start'><CloudDone/> Hosting services</li>
</ol>
</div>

<a href="https://it.fiverr.com/cesaresabattini/develop-a-full-stack-website-for-your-activity"
className='text-green-700 font-bold text-start text-xl hover:text-green-300'
>
    Click here to check the details
</a>
        </div>

        
<div className=' bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
ml-10 mr-20 my-20 pt-0 pb-5
'>
        <div className=' glowing font-bold text-4xl text-start px-12 pt-12'>
Frontend web app

        </div>
<div className='text-white font-bold text-start pl-5'>
I will provide you an interactive and responsive website according 
<br />
to your indications, with particular to the design, which will include:
<ol className='leading-10'>
    <li className='text-start'>  <PostAdd/> Up to 10 pages</li>
    <li className='text-start'> <Architecture/> A modern, interactive and responsive design</li>
    <li className='text-start'> <Image/> Images Storage system</li>
    <li className='text-start'><CloudDone/> Hosting services</li>
</ol>
</div>

<a href="https://it.fiverr.com/cesaresabattini/be-your-react-front-end-developer"
className='text-green-700 font-bold text-start text-xl hover:text-green-300'
>
    Click here to check the details
</a>
        </div>

        
        </div>
        
    );
}
 
export default ProductsPage;