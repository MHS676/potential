import React from 'react'
import { FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='mt-20 flex gap-28'>
    {/* left side */}
      <div>
        <div className=''>
            <p className='text-3xl'>Hi I am</p>
            <p className='text-[#FD6F00] font-normal text-5xl space-x-4'>Muhammad Umair</p>
            <p className='text-9xl font-bold'>UI & UX</p>
            <p className='text-9xl font-bold ml-64'>Designer</p>
            <p className='w-[700px] text-2xl mt-8'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
             <a className="btn px-8 bg-[#FD6F00] text-white font-extralight mt-5">Hire Me</a>
        </div>
      </div>
      {/* right side */}
      <div className=' '>
        <div className=''>
        <img className=' relative top-[151px] h-[368px] w-[364px] left-[3.5px] border-dark border-4 rounded-full border-indigo-200 border-y-orange-500 border-x-orange-500'  src="../../public/02.png" alt="" />
            <img className=' relative -top-[300px] left-[1px] h-[250px] w-[400px]'  src="../../public/03.png" alt="" />
        </div>
        <div
    className="absolute top-[290px] left-[1240px] w-[300px] h-[64px] bg-orange-500 opacity-80"
  ></div>
        <div className='flex gap-4 text-4xl -mt-14 ml-24'>
            <FaSquareFacebook />
            <FaSquareXTwitter />
            <FaInstagramSquare />
            <IoLogoYoutube />
        </div>
      </div>
    </div>
  )
}

export default Banner
