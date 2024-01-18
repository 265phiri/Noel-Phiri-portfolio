import React from 'react'

export const Hero = () => {
  return (
    <>
    <div className="h-screen flex items-center justify-center bg-cover bg-center z-20"
    style={{
      backgroundImage: 'https://images.pexels.com/photos/12417186/pexels-photo-12417186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }}
    >
  
        <div className='max-w-[800px]  max-h-[800px] mt-60  text-center mx-auto  flex flex-col p-8 mb-32 text-white'>

            <p className='text-light1 font-semibold font-inter text-xs xs:text-sm my-auto uppercase'>Allow me to introduce myself.</p>
            <h1 className='font-poppins font-semibold  md:text-8xl sm:text-7xl text-6xl'>Hi, I'm Noel Phiri<span className='text-8xl text-light1 '>.</span></h1>
            <p className='font-inter font-md  md:text-4xl sm:text-4xl text-2xl mt-4'>Web developer and UI  <br />developer.</p>
          <div className="mt-20"></div>
           <img src="/mouse.png" alt="" className='h-10 w-10 mx-auto animate-bounce' />
        </div>
    </div>
        </>
  )
}
