import React from 'react'
import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom'

import './Project.css'
import projectData from '../../data/Projects'




const Projects = () => {
    return (
        <div className='w-full py-[20px] md:py-[10px]'>
            <div className='flex justify-center px-[10px]'><h1 className=' border-[#1788ae] border-2 py-2 sm:py-3  mb-[50px] px-2 sm:px-5 rounded-lg text-2xl sm:text-3xl font-bold text-[#1788ae]'>My Projects</h1></div>
            {projectData && projectData.map((project) => <>
                <div className='max-w-[1240px] mx-auto p-5 md:flex  gap-8 md:gap-5 projectContainer'>
                    <div className=' w-[100%] md:w-[50%] hover:scale-105 duration-300 item-reverse' >
                        <Link to={project.link} data-tooltip-id="mongodb"
                            data-tooltip-content={project.type}>  <div className='flex max-w-[800px] md:max-w-[400px]'> <img className=' ' src={project.imgUrl} alt="project1Img" /></div>
                            </Link>
                        <Tooltip
                            id="mongodb"
                            style={{ backgroundColor: "#1788ae", fontSize: "15px", borderRadius: "50px" }}

                        />
                    </div>
                    <div className=' font-bold text-left   w-[100%] md:w-[50%]'>
                        <h1 className='my-3 text-3xl md:text-4xl text-[#5b367e] '>{project.name}</h1>
                        <h3 className=' my-3 text-2xl text-[#5b367e]'>{project.type}</h3>
                        <p className=' my-3 text-gray-600'>{project.functionality}</p>
                        <div className=' my-3 text-sm flex flex-wrap font-medium'>
                            {project.skills.map((skill) => <><span className=' skill'>{skill}</span></>)}
                        </div>
                    </div>
                </div>

            </>)}
            {/* <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-2 items-center gap-8 md:gap-16'>
                <div className='col-span-1 my-5'>
                    <img src={project1} alt="project1Img" />
                </div>
                <div className='col-span-1 font-bold text-left'>
                    <h1 className='my-3 text-3xl md:text-4xl text-[#5b367e] '>SS-Patharia Public School</h1>
                    <h3 className=' my-3 text-2xl text-[#5b367e]'>(School Website)</h3>
                    <p className=' my-3 text-gray-600'>This is a School Website. In this website visiter can leave review without login. And Admin can delete review, add Teacher and Delete Teacher</p>
                    <div className=' my-3 text-sm flex flex-wrap font-medium'>
                        <span className=' skills'>#vitejs</span>
                        <span className=' skills'>#CSS</span>
                        <span className=' skills'>#expressjs</span>
                        <span className=' skills'>#nodejs</span>
                        <span className=' skills'>#mongoDB</span>
                        <span className=' skills'>#jwt</span>
                        <span className=' skills'>#cloudinary</span>
                        <span className=' skills'>#</span>
                    </div>
                </div>
            </div> */}
            {/* project2 */}
            {/* <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-2 items-center gap-8 md:gap-16'>

                <div className='col-span-1 font-bold text-left'>
                    <h1 className='my-3 text-3xl md:text-4xl text-[#5b367e] '>SS-Patharia Public School</h1>
                    <h3 className=' my-3 text-2xl text-[#5b367e]'>(School Website)</h3>
                    <p className=' my-3 text-gray-600'>This is a School Website. In this website visiter can leave review without login. And Admin can delete review, add Teacher and Delete Teacher</p>
                    <div className=' my-3 text-sm flex flex-wrap font-medium'>
                        <span className=' border-gray-500 border-2 py-1 px-3 rounded-xl text-gray-600 m-1'>#vitejs</span>
                        <span className=' border-gray-500 border-2 py-1 px-3 rounded-xl text-gray-600 m-1'>#CSS</span>
                        <span className=' border-gray-500 border-2 py-1 px-3 rounded-xl text-gray-600 m-1'>#expressjs</span>
                        <span className=' border-gray-500 border-2 py-1 px-3 rounded-xl text-gray-600 m-1'>#nodejs</span>
                        <span className=' border-gray-500 border-2 py-1 px-3 rounded-xl text-gray-600 m-1'>#mongoDB</span>
                        <span className=' border-gray-500 border-2 py-1 px-3 rounded-xl text-gray-600 m-1'>#jwt</span>
                        <span className=' border-gray-500 border-2 py-1 px-3 rounded-xl text-gray-600 m-1'>#cloudinary</span>
                        <span className=' border-gray-500 border-2 py-1 px-3 rounded-xl text-gray-600 m-1'>#</span>
                    </div>
                </div>
                <div className='col-span-1 my-5'>
                    <img src={project1} alt="" />
                </div>
            </div> */}
        </div>
    )
}

export default Projects