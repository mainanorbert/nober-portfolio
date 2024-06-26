import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import bg from "../assets/images/banner-bg.png"
import { motion } from 'framer-motion'

function Skills() {
  return (
    <>
      <div id="skills" style={{ backgroundImage: `url(${bg})` }} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <motion.div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2"
          initial={{ x: 0 }} // Initial position of the word
          animate={{ x: 20 }} // Animation position
          transition={{ duration: 5, repeat: Infinity }} // Animation duration and repeat
         
        >
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3">
            In my tech journey, i have learnt various technologies and programming languages with high level of mastery.
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Django</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Laravel </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">React.js</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">C</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Tailwind</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Linux</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
