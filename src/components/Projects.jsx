import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";
import project1 from "../assets/images2/blog.jpg";
import project2 from "../assets/images2/project2.jpg"
import project3 from '../assets/images2/project3.jpg'



import "../styles.css";
import ProjectCard from "./ProjectCard";
import Values from "./Values";
import Goals from "./Goals";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Nobertechx Blog",
      description: "Best article combination on tech",
      img: project1,
    },
    {
      id: 2,
      title: "Welfare Management System",
      description: "Transparency and accountability",
      img: project2,
    },
    {
      id: 3,
      title: "File Handling",
      description: "Managing, cleaning, & combining files",
      img: project3,
    },
    {
      id: 4,
      title: "Olkisir",
      description: "Dispatch Management system",
      img: img2,
  
    },
    {
      id: 5,
      title: "AdvertsHub",
      description: "Advertise your products",
      img: img3,
    },
    {
      id: 6,
      title: "AirBnb Clone",
      description: "Vacation booking system",
      img: img1,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
         This section contains some of projects I have worked on before. The projects are either individual project or those that 
         I have collaboratively done with other devs. The project covers my programming journey of about two years, that is, from the time I
         was a self-taught developer to the time I joined ALX aAfrica as SE student and even post ALX.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Values
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Goals
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-1 max-w-4xl mx-auto lg:p-5 "
          >
           <Values/>
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-1   lg:p-5"
          >
            <Goals/>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
