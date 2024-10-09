import React from 'react';
import '../index.css';
import { Slider } from "@material-tailwind/react";

const About = () => {
  return (
    <div className='mt-20'>
      <div className="absolute">
        <img
          className="w-[364px] border-orange-500 mt-10 border-4 rounded-full"
          src="../../public/01.png" 
          alt="Profile Image"
        />

        <img
          className="w-[433.8px] right-[34px] relative bottom-[438px]"
          src="../../public/04.png"
          alt="Second Image"
        />
        <div
    className="absolute top-[20px] left-[30px] w-[300px] h-[65px] bg-orange-500 opacity-80"
  ></div>
      </div>

      <div className='ml-[500px]'>
        <div>
          <p className='text-6xl font-semibold mt-32 mb-5'>About Me</p>
          <p className='mb-2'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        </div>

        <div className="flex flex-col gap-4 text-xl">
          {/* UX Progress */}
          <p>UX</p>
          <Slider className="custom-slider" size="lg" defaultValue={80} />

          {/* Website Design Progress */}
          <p>Website Design</p>
          <Slider className="custom-slider" size="lg" defaultValue={70} />

          {/* App Design Progress */}
          <p>App Design</p>
          <Slider className="custom-slider" size="lg" defaultValue={90} />

          {/* Graphic Design Progress */}
          <p>Graphic Design</p>
          <Slider className="custom-slider" size="lg" defaultValue={80} />
        </div>
      </div>
    </div>
  );
};

export default About;
