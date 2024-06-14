// import React from 'react'

// const Goals = () => {
//     return (
//         <>
//             <div className='flex justify-center'>

//                 <div className='h-3rem] flex md:w-8/12 justify-around space-x-2'>
//                     <div className='border max-w-[20rem] rounded'>
//                         <h1 className='font-bold'>Personal Goal</h1>
//                         <p className='text-left p-1'> To be a responsible and hardworking individual with integrity by embracing intellectual growth and a
//                             healthy lifestyle.</p>
//                     </div>
//                     <div className='border max-w-[20rem] rounded'>
//                         <h1 className='font-bold'>Career Goal:</h1>
//                        <p className='text-left p-1'>
//                        To leverage technology through computer programming and develop software to enhance efficiency and
//                         accountability in delivering critical services.
//                        </p>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Goals


import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Goals = () => {
  const [inView, setInView] = useState(false);
  const goalsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (goalsRef.current) {
      observer.observe(goalsRef.current);
    }

    return () => {
      if (goalsRef.current) {
        observer.unobserve(goalsRef.current);
      }
    };
  }, []);

  return (
    <div className='flex justify-center' ref={goalsRef}>
      <div className='h-3rem flex md:w-8/12 justify-around space-x-2'>
        {['Personal Goal', 'Career Goal'].map((title, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='border max-w-[20rem] rounded'
          >
            <h1 className='font-bold'>{title}</h1>
            <p className='text-left p-1'>
              {title === 'Personal Goal'
                ? 'To be a responsible and hardworking individual with integrity by embracing intellectual growth and a healthy lifestyle.'
                : 'To leverage technology through computer programming and develop software to enhance efficiency and accountability in delivering critical services.'}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
