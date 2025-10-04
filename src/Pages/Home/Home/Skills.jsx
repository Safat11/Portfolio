import html from '../../../assets/skills/download (1).png'
import css from '../../../assets/skills/download (2).png'
import js from '../../../assets/skills/download (4).png'
import react from '../../../assets/skills/download.png'
import express from '../../../assets/skills/download (6).png'
import node from '../../../assets/skills/download (5).png'
import mongodb from '../../../assets/skills/download (7).png'
import next from '../../../assets/skills/download (3).png'
import tailwind from '../../../assets/skills/download (8).png'
import json from '../../../assets/skills/download (10).png'
import jwt from '../../../assets/skills/download (9).png'
import firebase from '../../../assets/skills/download (11).png'
import flutter from '../../../assets/skills/download (12).png'
import python from '../../../assets/skills/download (13).jpg'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper'

const Skills = () => {
  return (
  <div className='bg-slate-950'>
    <h2 className="text-center text-3xl font-bold text-white my-8 " >My Skills</h2>
    <Swiper
    slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
  >
    <div>
      <div className="sm:grid-cols-6 grid text-white ">
      <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={html} alt="html" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">HTML</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={css} alt="css" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">CSS</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={tailwind} alt="tailwind" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">Tailwind</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={js} alt="js" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">Java Script</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={react} alt="react" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">ReactJS</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>      
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={express} alt="express" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">Express.js</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={node} alt="node" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">Node.js</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={mongodb} alt="mongodb" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">MongoDB</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={next} alt="next" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">Next.js</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={json} alt="json" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">JSON</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={jwt} alt="jwt" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">JWT</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={firebase} alt="firebase" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">Firebase</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={flutter} alt="flutter" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">Flutter</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-compact mx-2 my-2 shadow-xl">
          <figure className='bg-white pt-2 px-2'><img src={python} alt="python" /></figure>
          <div className="card-body bg-slate-900 text-white">
            <h2 className="card-title">Python</h2>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </SwiperSlide>
      </div>
    </div>
    </Swiper>
  </div>
   
  );
};

export default Skills;