import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";


const Header = () => {
    // const [toggle,setToggle]=useState(true)
  return (
    <div className='p-5 bg-green-600'>
        <div className='max-w-[1240px]  mx-auto flex justify-between items-center text-white'>
           <Link to='/'> <div className='text-3xl font-logo'>Ramveer</div></Link>
            {/* {
                toggle?<div className='md:hidden block text-2xl'><FaBars onClick={()=>setToggle(!toggle)}/></div>: <div className='text-3xl md:hidden' ><IoClose onClick={()=>setToggle(!toggle)}/></div>
            } */}
            
           
            <ul className='md:flex gap-5'>
                <Link to='/admin'> <li className='hover:text-gray-700 duration-300 border-2 border-white-600 py-1 px-3 rounded-xl flex items-center gap-2 hover:scale-105'><FaRegUser/>Admin</li></Link>
                {/* <Link to='/project'><li className='hover:text-gray-700 duration-300'>Projects</li></Link>
                <Link to='/about'><li className='hover:text-gray-700 duration-300'>About</li></Link>
                <Link to='/contact'> <li className='hover:text-gray-700 duration-300'>Contact</li></Link> */}
            </ul>
            {/* responsive */}
            {/* <ul className={`md:hidden w-full h-screen gap-5 fixed bg-black ${toggle?"left-[-100%]":"left-[0%]"}  top-[76px] duration-500 z-10`}>
                <Link to='/' > <li className='block p-5 hover:text-gray-700 duration-300'>Home</li></Link>
                <Link to='/project'><li className='block p-5 hover:text-gray-700 duration-300'>Projects</li></Link>
                <Link to='/about'><li className='block p-5 hover:text-gray-700 duration-300'>About</li></Link>
                <Link to='/contact'> <li className='block p-5 hover:text-gray-700 duration-300'>Contact</li></Link>
            </ul> */}
        </div>
    </div>
  )
}

export default Header