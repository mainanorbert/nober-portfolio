import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/bg.jpg"
import pass from '../assets/images/pass2.jpg'
import Navbar from './Navbar'
import "../styles.css"
import Typewriter from "typewriter-effect"

function Header() {
  return (
    <>
      <div id='home' style={{ backgroundImage: `url(${bg})` }} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
            </div>
            <h1 className='text-white text-5xl font-bold'>
              <Typewriter
                options={{
                  strings: 'Hi! I\'m Norbert,',
                  loop: true,
                  autoStart: true,
                  cursor: "|",
                  delay: 40,
                  deleteSpeed: 40

                }}
              /></h1>
            <p className='text-white py-4 max-w-lg '>
              A skilled Software Engineer with expertise in full-stack web development. I am Proficient in React.js, Django, Laravel, and Node.js, I excel in creating
              high-performance, responsive applications. My passion lies in leveraging technology to enhance
              efficiency and accountability, driving innovative solutions for complex challenges.</p>
            <button className='  text-white text-2xl'>Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button>
          </div>
          {/* <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img rounded-full' src={logo1} alt="" />
    
      </div> */}
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">

            <img width={200} className=' ast-img rounded-full' src={pass} alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Header