import React from 'react'
import contactImage from '../../assets/contact.webp'
import { LuUser2 } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";


const Contact = () => {
  return (<>
  <div className='border-2'></div>
    <div className='w-full py-[100px]'>
      <div className='max-w-[1240px] p-5  md:grid grid-cols-6 gap-6 mx-auto' >
        <div className=' col-span-3 my-auto'>
          <img src={contactImage} alt=" contactBg" />
        </div>
        <form action="" className=' col-span-3 grid gap-0.5'>
          <div className='flex flex-col'>
            <label htmlFor="" ><LuUser2 className='inline mr-1'/>Name:</label>
            <input className='border-2 p-1 outline-[#1788ae]' type="text" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor=""> <GoMail className='inline mr-1'/>Email:</label>
            <input className='border-2 p-1 outline-[#1788ae]' type="text" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor=""><FiMessageSquare className='mr-1 inline'/>Message:</label>
            <textarea className='border-2 p-1 outline-[#1788ae]' name="" id="" rows='6'/>
          </div>
          <button className='bg-[#1788ae] text-white'> Send Message</button>
        </form>
      </div>
    </div>
    </> )
}

export default Contact