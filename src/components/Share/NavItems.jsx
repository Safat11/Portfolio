
import { Link } from 'react-router-dom';
import logo from '../../../logo/logo.jpg'



const NavItems = () => {
    const navOption = <>
  
        <li className=" hover:bg-slate-200 rounded  "  ><Link to='/'>Home</Link></li>
        <li className="hover:bg-slate-200 rounded " >
            <Link to='/project'>Project</Link>

        </li>
        <li className="hover:bg-slate-200  rounded "  ><Link to='/about'>About</Link></li>
        <li className="hover:bg-slate-200 rounded "  ><Link to='/contact'>Contact</Link></li>
       
    </>
    return (

        
        <div className='bg-slate-900 py-4 '>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn text-white border-white bg-slate-800 rounded lg:hidden">
                            <svg xmlns="/public/logo.png" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52 font-bold text-white">
                            {navOption}
                        </ul>
                    </div>
                    <Link to='/' className="px-2" >
                        <img className="w-20 h-18" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center   hidden lg:flex">
                    <ul className="menu menu-horizontal px-2  font-bold  text-white ">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end text-white px-8">
                    <a href='Amran Hossain-Resume.pdf' download='resume.pdf' >
                    <button className="text-white font-bold btn bg-slate-800 border-white hover:bg-slate-400 rounded ">Resume</button>
                    </a>
                </div>
            </div>
        </div>
      
    );
};

export default NavItems;