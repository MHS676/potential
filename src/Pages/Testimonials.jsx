import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const Testimonials = () => {
  return (
    <div className='mt-10'>
      {/* Heading Section */}
      <div>
        <p className='text-center text-6xl font-semibold mt-20'>Testimonials</p>
        <p className='text-center w-[500px] mt-5 mx-auto'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      {/* Swiper Slider Section */}
      <div className='mt-10'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-[800px] mx-auto"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className='bg-gray-100 rounded-2xl'>
              <div className='p-10 flex gap-4'>
                <img className='h-24 w-24' src="../../public/e.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                  <span>
                    <p className='mt-5 text-black font-bold'>Name</p>
                    <p>CEO</p>
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlide components for more testimonials */}
          <SwiperSlide>
            <div className='bg-gray-100 rounded-2xl'>
              <div className='p-10 flex gap-4'>
                <img className='h-24 w-24' src="../../public/e1.png" alt="" />
                <p>
                  Another testimonial goes here. Lorem ipsum dolor sit amet consectetur adipiscing elit. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                  <span>
                    <p className='mt-5 text-black font-bold'>Name</p>
                    <p>CTO</p>
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-gray-100 rounded-2xl'>
              <div className='p-10 flex gap-4'>
                <img className='h-24 w-24 rounded-full' src="../../public/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
                <p>
                  Another testimonial goes here. Lorem ipsum dolor sit amet consectetur adipiscing elit. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                  <span>
                    <p className='mt-5 text-black font-bold'>Name</p>
                    <p>CTO</p>
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
