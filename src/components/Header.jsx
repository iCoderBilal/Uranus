import React from 'react';
import webLogo from "../assets/web-logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <div className="website-logo pt-8 flex justify-center">
        
       <Link to="/brownpaper" className='self-center' ><p className="text-center border-white lg:text-[1.5vw] lg:leading-[2.2vw] font-semibold text-white rounded-[40px]">Brown Paper</p></Link>

           <Link to="/"><img src={webLogo} alt="Uranus Logo" className="w-[25vw] lg:w-[9vw] lg:mx-[200px] mx-6" /></Link>
           <Link to="/howtobuy" className='self-center' ><p className="text-center border-white lg:text-[1.5vw] lg:leading-[2.2vw] font-semibold text-white rounded-[40px]">How To Buy</p></Link>
        </div>
    </div>
  )
}

export default Header
