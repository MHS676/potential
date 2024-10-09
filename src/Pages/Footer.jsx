import React from 'react'
import { FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mt-20'>
    <footer className="footer footer-center bg-gray-100 text-base-content rounded p-10">
    <div>
        <a className=" text-3xl font-semibold  gap-2"> <img className="h-10 inline-flex" src="../../public/Subtract.png" alt="" /> M<span className="font-extralight">umair</span></a>
    </div>
  <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
      <a className="link link-hover">About Me</a>
      <a className="link link-hover">Services</a>
      <a className="link link-hover">Projects</a>
      <a className="link link-hover">Testimonials</a>
      <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <div className='flex gap-4 text-4xl'>
            <FaSquareFacebook />
            <FaSquareXTwitter />
            <FaInstagramSquare />
            <IoLogoYoutube />
        </div>
    </div>
  </nav>
</footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>© 2023 Mumair All Rights Reserved , Inc.</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
