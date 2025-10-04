import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fknrk97', 'template_mj39fou', form.current, 'aEO30HzZRxPNyMgEe')
      .then((result) => {
          console.log(result.text);
          if(result.text){
            alert('Thank You');
        }
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <div className="hero min-h-screen  bg-slate-950 text-white">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left px-6 ">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="py-2">safat3622@gmail.com</p>
      <p className="py-2">+8801823885902</p>
      <div>
  <div className="flex gap-2">
    <div >
    <Link to='https://www.facebook.com/AmranSafat/' >
   <FaFacebook className="w-6 h-8"/>
   </Link>
    </div>
  
   <Link to='https://www.linkedin.com/in/amran-hossain-safat-355897293/'>
   <FaLinkedin className="w-6 h-8" />
   </Link>
   <Link to='https://github.com/Safat11'>
   <FaGithub className="w-6 h-8"/>
   </Link>
  </div>
</div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-900 text-black">
      <div className="card-body font-bold ">
        <form ref={form} onSubmit={sendEmail}>
      <div className="form-control">
          <label className="label ">
            <span className="label-text text-white text-xl ">Name</span>
          </label>
          <input type="text" name="user_name" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white text-xl  ">Email</span>
          </label>
          <input type="email" placeholder="Email" name="user_email" className="input input-bordered" />
        </div>

        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white text-xl">Message</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
        </div>
        <div className="form-control mt-6">
          <input className="text-white font-bold btn bg-slate-800 border-white hover:bg-slate-400 rounded" type="submit" value='Submit'></input>
        </div>
        </form>
      </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;