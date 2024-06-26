import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({item}) {
  return (
    <>
      <a href={`${item.url}`} target='_blank' className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
              <img src={item.img} alt="" className='w-full' />
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
              </div>
            </a>
    </>
  )
}

export default ProjectCard