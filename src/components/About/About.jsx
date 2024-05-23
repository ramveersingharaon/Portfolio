import React from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import AboutImg from '../../assets/about 2.webp'
import './About.css'

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const About = ({ toggle, setToggle }) => {

    return (
        <div className='w-full  '>
            <div className={toggle ? 'max-w-[1240px] w-[100vw] fixed  top-0 left-0 ml-[50vw] -translate-x-1/2 border-red-500 bg-[#191919] z-20 p-5 lg:p-10 md:flex gap-5 items-center container' : 'hidden'}>
            <div className='absolute top-[20px] right-[20px] md:top-[20px] md:right-[20px] text-white text-3xl z-50 cursor-pointer' onClick={() => setToggle(!toggle)}><FaXmark />
            </div>
                <div className='w-[50%] flex flex-col gap-2 md:gap-4 content'>
                    <h1 className='text-[#93d0f5] my-1 md:my-3 text-2xl font-bold '> About Me</h1>
                    <p className='md:my-3 text-white text-[12px] md:text-[16px]'>
                    Hello! I'm Ramveer Singh, a new and enthusiastic MERN stack developer with a passion for creating dynamic and user-friendly web applications. Although I do not have a formal degree, I have spent countless hours self-learning and working on various projects to develop my skills.
                    </p>
                    <div className='md:my-3 flex flex-wrap text-[12px] md:text-[16px]'>
                        <span className='skills text-white'>#javascript</span><span className='skills text-white'>#reactjs</span><span className='skills text-white'>#redux</span><span className='skills text-white'>#express</span><span className='skills text-white'>#nodejs</span><span className='skills text-white'>#tailwind</span><span className='skills text-white'>#mongodb</span><span className='skills text-white'>#jwt</span><span className='skills text-white'>#cloudinary</span><span className='skills text-white'>#html</span><span className='skills text-white'>#css</span><span className='skills text-white'>#git</span><span className='skills text-white'>#github</span><span className='skills text-white'>#mongoose</span>
                    </div>
                    <h1 className='text-[#93d0f5] my-3 text-2xl font-bold'> MERN Stack</h1>
                    <div className='flex gap-5 text-5xl items-center mt-[15px] mx-auto md:mx-0'>

                        {/* mongodb  */}
                        <Link
                            data-tooltip-id="mongodb"
                            data-tooltip-content="MongoDB"
                        >
                            <div className='text-[#00684a] flex flex-col items-center gap-3  cursor-pointer'><DiMongodb /> <p>M</p></div>
                        </Link>
                        <Tooltip
                            id="mongodb"
                            style={{ backgroundColor: "#00684a", fontSize: "15px", borderRadius: "50px" }}
                           
                        />


                        {/* express */}

                        <a
                            data-tooltip-id="express"
                            data-tooltip-content="Express"
                        >
                            <div className='text-white flex flex-col items-center cursor-pointer gap-3'><SiExpress /><p>E</p></div>
                        </a>
                        <Tooltip
                            id="express"
                            style={{ backgroundColor: "white", color: "black", fontSize: "15px", borderRadius: "50px" }}
                        />

                        {/* Reactjs  */}

                        <a
                            data-tooltip-id="react"
                            data-tooltip-content="Reactjs"
                        >
                            <div className='text-[#087ea4] flex flex-col items-center  cursor-pointer gap-3'><RiReactjsFill /><p>R</p></div>
                        </a>
                        <Tooltip
                            id="react"
                            style={{ backgroundColor: "#087ea4", fontSize: "15px", borderRadius: "50px" }}
                        />

                        {/* Nodejs  */}

                        <a
                            data-tooltip-id="node"
                            data-tooltip-content="Nodejs"
                        >
                            <div className='text-[#2c682c] flex flex-col items-center  cursor-pointer gap-3'><FaNodeJs /><p>N</p></div>
                        </a>
                        <Tooltip
                            id="node"
                            style={{ backgroundColor: "#2c682c", fontSize: "15px", borderRadius: "50px" }}
                        />

                    </div>
                </div>
                <div className='w-[50%] hidden md:block image'>
                    <img src={AboutImg} alt=" aboutBg" />
                </div>

            </div>

        </div>
    )
}

export default About