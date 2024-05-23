import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './Review.css';

// import required modules
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';
import reviews from '../../data/Review';



const Review = () => {
  return (<>
    <div className='border-2'></div> {/*-----------brackpoint--------------*/}
    <div className='w-full py-[100px]'>
      <div className='flex justify-center px-[10px]'><h1 className=' border-[#1788ae] border-2 py-2 sm:py-3 px-2 sm:px-5 rounded-lg text-2xl sm:text-3xl font-bold text-[#1788ae]'>What my Mentors saying me?</h1></div>
      <div className='max-w-[1040px] mx-auto'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#1788ae',
            '--swiper-pagination-color': '#1788ae',
          }}
          loop
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          zoom={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <>
              <SwiperSlide className='md:px-[70px] px-[10px] my-5 z-10'>

                <div className='md:grid grid-cols-2 py-5  '>
                  <div className='grid col-span-1 p-5 reviewImageBox'>
                    <img className="object-cover w-[250px] h-[250px] rounded-[50%] mx-auto cursor-grab hover:scale-105 duration-300 shadow-md hover:shadow-gray-800 z-1 " src={review.url} alt="review1Img" />
                  </div>
                  <div className='col-span-1 p-5  reviewContentBox'>
                    <h5 className='mb-5'>{review.message}</h5>
                    <div className='items-left'>
                      <h2 className=' text-right text-2xl sm:text-3xl text-[#1788ae] font-bold'>{review.name}</h2>
                      <h3 className='text-right sm:text-xl text-[#1788ae] font-bold'> {review.profession}</h3>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide className='md:px-[50px] px-[10px] my-5 z-10'>
               
                <div className='md:grid grid-cols-2 py-5  '>
                  <div className='grid col-span-1 p-5 border-2 md:border-r-0 md:border-b-2 border-b-0 border-[#1788ae]'>
                    <img className="object-cover w-[250px] h-[250px] rounded-[50%] mx-auto cursor-grab hover:scale-105 duration-300 hover:shadow-md hover:shadow-gray-800 z-1 " src={review.url} alt="review1Img" />
                  </div>
                  <div className='col-span-1 border-2 md:border-l-0 p-5 border-t-0 md:border-t-2 border-gray-500'>
                    <h5 className='mb-5'>{review.message}</h5>
                    <div className='items-left'>
                      <h2 className=' text-right text-2xl sm:text-3xl text-[#1788ae] font-bold'>{review.name}</h2>
                      <h3 className='text-right sm:text-xl text-[#1788ae] font-bold'> {review.profession}</h3>
                    </div>

                  </div>
                </div>
              </SwiperSlide> */}
            </>
          ))}




        </Swiper>
      </div>
    </div>
  </>
  )
}

export default Review