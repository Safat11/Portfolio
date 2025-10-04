//import { TypeAnimation } from 'react-type-animation';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from '../../assets/profile/safat.jpg'


const About = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Development", "Web Development", "Flutter Development", "AI/ML Enthusiast"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="hero text-white bg-slate-950 py-6 text-justify">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <div className="w-full lgl:w-1/2 flex justify-center items-center  relative px-4 py-4">
          <img src={profile} className="max-w-xl h-96 rounded-lg shadow-slate-100 shadow-md w-[300px] lgl:w-[500px] lgl:h-[680px] z-10 s  " />
          <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-slate-900 to-slate-900 shadow-shadowOne flex justify-center items-center "></div>
        </div>
        <div className='px-6' >
          <h1 className="text-4xl font-bold text-white">
            Hi, I'm <span className="text-designColor capitalize text-yellow-500">Amran Hossain</span>
          </h1>
          <h2 className="text-2xl font-bold text-white pt-2">
            <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="py-6 text-lg leading-loose space-x-2">Computer Science and Engineering graduate with hands-on experience in Full Stack (MERN) and Flutter development, as well as AI/ML model deployment. Proficient in building dynamic and scalable web and mobile applications using React.js, Node.js, Express, and MongoDB. Adept at problem-solving, team leadership, and system integration, with a strong focus on delivering high-quality, maintainable code.
            Throughout various projects, I’ve collaborated closely with developers and designers, strengthening my communication, teamwork, and project management skills. Recognized for my presentation abilities and commitment to innovation, I continuously explore the latest technologies to create AI-driven and user-centric solutions as an aspiring software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;