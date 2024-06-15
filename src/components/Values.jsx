import React from 'react'
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect'

const Values = () => {
  const [index, setIndex] = useState(0);
  const lines = [
    "I strongly believe that we can change the way our society functions by deploying technology in the right manner.",
    "Every development process should consider honesty, integrity, and transparency.",
    "I strongly believe in team collaboration in the development process as a means to achieving greater goals in the development process."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [lines.length])
  return (
    <>
      <div className='h-[3rem] animate-bounc'>

        {/* {lines[index]} */}
        <Typewriter
          options={{
            strings: [
              "I strongly believe that we can change the way our society functions by deploying technology in the right manner.",
              "Every development process should consider honesty, integrity, and transparency.",
              "I strongly believe in team collaboration in the development process as a means to achieving greater goals in the development process."
            ],
            autoStart: true,
            loop: true,
            delay: 4,
            cursor: "|",
            pauseFor: 8000,
            deleteSpeed: 4

          }}
        />

      </div>

    </>
  )
}
export default Values

