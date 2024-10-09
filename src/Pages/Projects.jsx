import React from 'react'

const Projects = () => {
  return (
    <div>
    <div>
        <p className='text-center text-6xl font-semibold mt-20'>My Projects</p>
        <p className='text-center w-[500px] mt-5 mx-auto'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
      <div className='mt-10'>
        <div className='flex justify-center gap-5'>
            <button className='btn bg-gray-100  text-black rounded-xl '>All</button>
            <button className='btn bg-gray-100  text-black rounded-xl '>UI/UX</button>
            <button className='btn bg-[#FD6F00] text-white rounded-xl '>Web Design</button>
            <button className='btn bg-gray-100  text-black rounded-xl '>App Design</button>
            <button className='btn bg-gray-100  text-black rounded-xl '>Graphics Design</button>
        </div>
      </div>
        <div className='flex gap-10'>
        <div className='w-[400px] flex rounded-xl  mt-10 bg-[#FFEBDB]'>
          <img className=' relative  ml-24' src="../../public/w1.png" alt="" />
          <img className='relative right-[330px] top-[92px] h-[400px]' src="../../public/w2.png" alt="" />
        </div>
        <div className='w-[400px] flex rounded-xl  mt-10 bg-[#FFEBDB]'>
          <img className=' relative  ml-24' src="../../public/w1.png" alt="" />
          <img className='relative right-[330px] top-[92px] h-[400px]' src="../../public/w2.png" alt="" />
        </div>
        <div className='w-[400px] flex rounded-xl  mt-10 bg-[#FFEBDB]'>
          <img className=' relative  ml-24' src="../../public/w1.png" alt="" />
          <img className='relative right-[330px] top-[92px] h-[400px]' src="../../public/w2.png" alt="" />
        </div>

      
      </div>
              <div className='flex gap-[120px] mt-5'>
        <div>
          <p className=' text-orange-400  font-extralight'>Web Design </p>
          <p className='text-2xl'>AirCalling Landing Page Design  </p>
        </div>
        <div>
          <p className=' text-orange-400  font-extralight'>Web Design </p>
          <p className='text-2xl'>Business Landing Page Design   </p>
        </div>
        <div>
          <p className=' text-orange-400  font-extralight'>Web Design </p>
          <p className='text-2xl mb-20'>Ecom Web Page Design   </p>
        </div>
              </div>
    </div>
  )
}

export default Projects
