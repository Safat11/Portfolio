import { Link } from 'react-router-dom';
import sport1 from '../../assets/project/sport/sport1.jpg'
import sport2 from '../../assets/project/sport/sport2.jpg'
import sport from '../../assets/project/sport/sport.jpg'
import sport3 from '../../assets/project/sport/sport3.jpg'
import sport4 from '../../assets/project/sport/sport4.jpg'
import sport5 from '../../assets/project/sport/sport5.jpg'
import sport6 from '../../assets/project/sport/sport6.jpg'

import toy from '../../assets/project/toys/toy.jpg'
import toy2 from '../../assets/project/toys/toy2.jpg'
import toy3 from '../../assets/project/toys/toy3.jpg'
import toy4 from '../../assets/project/toys/toy4.jpg'
import toy5 from '../../assets/project/toys/toy5.jpg'
import toy6 from '../../assets/project/toys/toy6.jpg'

import master from '../../assets/project/master/master.jpg'
import master2 from '../../assets/project/master/master2.jpg'
import master3 from '../../assets/project/master/master3.jpg'
import master4 from '../../assets/project/master/master4.jpg'
import master5 from '../../assets/project/master/master5.jpg'
import master6 from '../../assets/project/master/master6.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye  } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from 'react-icons/fa';




const ProjectItems = () => {
    return (
    
        <div className="sm:grid-cols-3 sm:grid text-white px-4  ">
        <div className="card px-2 pt-2 mb-4 mx-2 bg-slate-900 shadow-inner shadow-blue-900">
          <div className='pt-4 px-4 '>
          <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination,]}
                className="mySwiper"
            >
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={sport1} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={sport2} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={sport} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={sport3} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={sport4} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={sport5} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={sport6} alt="" />
               </SwiperSlide>
            </Swiper>
           
          </div>
       
        <div className="card-body  rounded">
          <h2 className="card-title text-2xl font-bold">
            Sports Academy
          </h2>
          <p className='text-justify'>
                    Developed a Sports Academy website using the MERN stack. Implemented admin functionality, payment integration, sports class management, and instructor profiles. Utilized React.js, MongoDB, JWT, Firebase, Express, Node.js, and Tailwind CSS.
                </p>
          <div className="card-actions justify-between my-4">
          <Link  to='https://sports-academy-dfce9.web.app/' target="_blank" rel="noopener noreferrer">
                    <button className="text-white font-bold btn bg-slate-800 border-white hover:bg-slate-400 rounded">Live 
                    
                    <FontAwesomeIcon icon={faEye} beatFade className='text-xl' />
                    </button>
                    
                    </Link>
                    <Link to='https://github.com/Safat11/sports-academy-client' target="_blank" rel="noopener noreferrer">
                    <button className="text-white font-bold btn bg-slate-800 border-white hover:bg-slate-400 rounded">GitHub 
                   <FaGithub className='text-2xl'/>
                    </button>
                    </Link>
          </div>
        </div>
        </div>
        <div className="card px-2 pt-2 mb-4 mx-2 bg-slate-900 shadow-inner shadow-blue-900">
          <div className='pt-4 px-4 '>
          <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination,]}
                className="mySwiper"
            >
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={toy} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={toy2} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={toy3} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={toy4} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={toy5} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={toy6} alt="" />
               </SwiperSlide>
            </Swiper>
           
          </div>
       
        <div className="card-body  rounded">
          <h2 className="card-title text-2xl font-bold">
          Toy Cars
          </h2>
          <p className='text-justify'>
          Crafted an engaging Toy Cars website with distinct sections including All Toys, My Toys, Add Toys, Blog, and Login. Leveraged the power of the MERN stack to deliver a captivating user experience. Implemented dynamic features, user authentication, and real-time updates, ensuring a seamless browsing experience.
                </p>
          <div className="card-actions justify-between my-4">
          <Link  to='https://toys-car-d036e.web.app/' target="_blank" rel="noopener noreferrer">
                    <button className="text-white font-bold btn bg-slate-800 border-white hover:bg-slate-400 rounded">Live 
                    
                    <FontAwesomeIcon icon={faEye} beatFade className='text-xl' />
                    </button>
                    
                    </Link>
                    <Link to='https://github.com/Safat11/toys-car-client' target="_blank" rel="noopener noreferrer">
                    <button className="text-white font-bold btn bg-slate-800 border-white hover:bg-slate-400 rounded">GitHub 
                   <FaGithub className='text-2xl'/>
                    </button>
                    </Link>
          </div>
        </div>
        </div>

        <div className="card px-2 pt-2 mb-4 mx-2 bg-slate-900 shadow-inner shadow-blue-900">
          <div className='pt-4 px-4 '>
          <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination,]}
                className="mySwiper"
            >
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={master} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={master2} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={master3} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={master4} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={master5} alt="" />
               </SwiperSlide>
               <SwiperSlide>
                <img className='rounded-2xl object-contain' src={master6} alt="" />
               </SwiperSlide>
            </Swiper>
           
          </div>
       
        <div className="card-body  rounded">
          <h2 className="card-title text-2xl font-bold">
          Master Chef USA
          </h2>
          <p className='text-justify'>
          Developed the Master Chef USA website, an interactive culinary platform featuring recipes, cooking tips, chef profiles, and a community forum. Utilized React.js, Firebase, and Tailwind CSS for a seamless user experience. Showcased proficiency in frontend development and database management.
                </p>
          <div className="card-actions justify-between my-4">
          <Link  to='https://master-chef-usa.web.app/' target="_blank" rel="noopener noreferrer">
                    <button className="text-white font-bold btn bg-slate-800 border-white hover:bg-slate-400 rounded">Live 
                    
                    <FontAwesomeIcon icon={faEye} beatFade className='text-xl' />
                    </button>
                    
                    </Link>
                    <Link to='https://github.com/Safat11/master-chef-usa' target="_blank" rel="noopener noreferrer">
                    <button className="text-white font-bold btn bg-slate-800 border-white hover:bg-slate-400 rounded">GitHub 
                   <FaGithub className='text-2xl'/>
                    </button>
                    </Link>
          </div>
        </div>
        </div>
      </div>

    );
};

export default ProjectItems;