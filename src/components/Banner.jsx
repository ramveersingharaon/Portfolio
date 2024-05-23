import React, { useState } from 'react'
import About from './About/About';
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Banner = () => {


    const [toggle, setToggle] = useState(false)

    return (
        <div className='bg-green-600 w-full py-[100px]'>
            <About
                toggle= {toggle}
                setToggle = {setToggle}
            />
            <div className='max-w-[1240px] mx-auto text-center text-white font-bold'>
                <h3 className='text-xl md:text-2xl my-4 text-gray-700'>Web Developer</h3>
                <h1 className='text-4xl md:text-6xl my-4'>Ramveer Singh</h1>
                <h2 className='text-2xl md:text-4xl my-4'>My Skills-

                    <ReactTyped className='pl-2' strings={["MERN Technology", "Tailwind CSS", "RTK Query"]} typeSpeed={100}
                        backSpeed={50}
                        loop
                    />
                </h2>
                <button className='border py-2 px-5 rounded-xl hover:scale-105 duration-300 hover:border-x-4' onClick={() => setToggle(!toggle)}>About Me</button>
            </div>
            {/* link icons  */}
            <div className='text-white text-3xl absolute top-[100px] right-5 z-[0]'>
                <Link to="mailto:ramveersinghlodhi.official@gmail.com"> <LuMail className='my-5 hover:scale-110 duration-200' /></Link>
                <Link to="https://www.linkedin.com/in/ramveer-singh-3539b321b/"> <FaLinkedin className='my-5 hover:scale-110 duration-200' /></Link>
                <Link to="https://github.com/ramveersingharaon"> <FaGithub className='my-5 hover:scale-110 duration-200' /></Link>
                <Link to="https://www.youtube.com/channel/UCvw5BgmMGbpU3gIdrmlYfOg"> <IoLogoYoutube className='my-5 hover:scale-110 duration-200' /></Link>



            </div>
        </div>
    )
}

export default Banner