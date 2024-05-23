import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <div className='border-2'></div> {/*-------------BreackPoint-------------*/}
            <div className='w-full py-[50px] flex items-center '>
                <div className='max-w-[1240px] mx-auto  flex items-center flex-col gap-4'>
                    <div className='text-gray-500'>Ramveer Singh <FaRegCopyright className='inline'/> 2024 </div>
                    <div className='font-logo text-[#1788ae] text-3xl'>Ramveer</div>
                    <div className='flex gap-8 text-xl text-[#1788ae]'><FaGithub /><FaLinkedin  /> <IoLogoYoutube /></div>
                </div>
            </div>
        </>
    )
}

export default Footer