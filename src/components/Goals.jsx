import React from 'react'

const Goals = () => {
    return (
        <>
            <div className='flex justify-center'>

                <div className='h-3rem] flex w-8/12 justify-around space-x-2'>
                    <div className='border max-w-[20rem] rounded'>
                        <h1 className='font-bold'>Personal Goal</h1>
                        <p className='text-left p-1'> To be a responsible and hardworking individual with integrity by embracing intellectual growth and a
                            healthy lifestyle.</p>
                    </div>
                    <div className='border max-w-[20rem] rounded'>
                        <h1 className='font-bold'>Career Goal:</h1>
                       <p className='text-left p-1'>
                       To leverage technology through computer programming and develop software to enhance efficiency and
                        accountability in delivering critical services.
                       </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Goals