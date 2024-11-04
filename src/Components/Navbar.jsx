import React, { useContext } from 'react'
import logo from "./images/logo (2).png"
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/Context'
const Navbar = () => {

  // const {showSignupForm} =useContext(UserContext)
  // const {showLoginForm} =useContext(UserContext)

  function clickHandler(){
    window.scrollTo(0,0);
    let ul=document.querySelector('ul');
    if(ul.style.display==''|| ul.style.display=='none'){
      ul.style.display='flex';
      // ul.style.flex-direction='column'
    }else{
      ul.style.display='none';
    }
  }
  return (
    <div>
    <div className='flex justify-between mx-3 items-center relative pt-3' >
      <Link to="/"><div className=''><img src={logo} className='pt-3 block' width="70px" alt="" /></div></Link>
      <img onClick={clickHandler} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" width="50px" className='lg:hidden fixed right-0' alt="" />
      <ul className='hidden absolute flex-col left-[40%] top-3 font-bold text-2xl lg:flex lg:flex-row lg:static lg:gap-20 lg:justify-between'>
        <Link to="/"><li className='group'>Home <div className='h-1 w-full group-hover:bg-purple-300'></div></li></Link>
        <Link to="/digital"><li className='group'>Digital <div className='h-1 w-full group-hover:bg-purple-300'></div></li></Link>
        <Link to="/access"><li className='group'>Access Control <div className='h-1 w-full group-hover:bg-purple-300'></div></li></Link>
        <Link to="/about"><li className='group'>About <div className='h-1 w-full group-hover:bg-purple-300'></div></li></Link>
      </ul>
      <div className='space-x-3 mr-11'>
        <Link to="/identity"><button className='bg-blue-100 p-3 rounded-lg hover:bg-blue-200 text-black'>Login</button></Link>
        <Link to="/identity"><button className='bg-blue-300 p-3 rounded-lg hover:bg-blue-400 text-black'>Sign Up</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
