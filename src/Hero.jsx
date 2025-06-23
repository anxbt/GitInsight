import React from 'react';
import pattern from './assets/pattern.svg';
import { useState } from 'react';


const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
<div class="bg-custom-gradient min-h-screen">
 <div className="relative min-h-screen bg-[#051D3A] overflow-hidden">
      {/* Glowing circle */}
      <div className="absolute w-[500px] h-[500px] bg-[#5E50BA] rounded-full blur-[120px] opacity-90 -left-64 top-1/4" />
   <div className="absolute w-[500px] h-[500px] bg-[#5E50BA] rounded-full blur-[120px] opacity-60 -left-64 top-1/4" /> 
    {/* Pattern SVG (Right Side Bars) */}
    <img
        src={pattern}
        alt="bar"
        className="absolute top-0 right-0 w-[720px] rotate-[0deg] hidden sm:block"
    />

    <div className='ml-5'>
            {/* Navbar */}
        <nav className=" text-white mt-3 mr-4  relative z-10 flex justify-between items-center">
          <h1 className="text-lg font-semibold">GitInsight</h1>
          {/* Hamburger Button */}
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
       {/* Menu */}
          <ul className={`flex flex-row gap-6 text-sm font-medium sm:flex ${menuOpen ? 'block' : 'hidden'}`} >
            <li><a href="#" className="hover:underline">How it works</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="bg-white/10 px-4 py-1 rounded-full backdrop-blur-md hover:bg-white/20">contact us</a></li>
          </ul>
        </nav>
              {/* Hero Content */}
        <div className="relative z-10 mt-24 ml-1 max-w-2xl">
          {/* Gradient Heading */}
          <div className="text-4xl lg:text-7xl sm:text-5xl font-bold leading-tight space-y-2">
            <div className="bg-gradient-to-r from-[#9A84FF] to-white text-transparent bg-clip-text">
              Know Your Worth
            </div>
            <div className='text-white'>From Github to </div>
            <div className='text-white'>Paycheck .</div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 mt-4">
            Upload your Github username and let our AI decode your skills, estimate your current and future salary, and guide recruiters what to ask next.
          </p>
            {/* CTA Button */}
          <button className="mt-6 px-5 py-2 bg-white text-black rounded-full font-medium shadow hover:bg-gray-100 transition">
            Analyze Profile
          </button>
          </div>

    </div>
    </div>
  </div>
  );
};

export default Hero;