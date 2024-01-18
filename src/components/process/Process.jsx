import React from 'react'
import { GiBrain } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";
import { FaLaptopCode } from "react-icons/fa6";
import { BsClipboard2Check } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";

export const Process = () => {
  return (
    <div className='flex flex-col w-full bg-dark1 text-white py-28 px-4'>
            
    <div className='flex justify-center w-full bg-dark1 text-white py-28 px-4 border-t-0'>
 <h2 className='flex w-fit border-4 border-r-0 border-l-0 border-t-0 border-light1 font-semibold font-poppins text-2xl md:text-3xl sm:2xl sm:font-medium py-8 max-w-[130px] mb-10 sm:ml-40 mx-auto'>Process</h2>
 </div>

    <section className='max-w-full mx-auto gap-10 md:gap-8 lg:gap-9 justify-center  flex flex-col  items-center'>

        {/* Strategy */}
        <div className='flex flex-col md:flex-row md:gap-8 md:text-2xl md:mb-10 justify-center items-center'>

            <div className=' h-40 w-40 md:h-56 md:w-56 bg-dark1  rounded-xl drop-shadow-3xl my-3 items-center text-center flex flex-col justify-center'>
            <GiBrain size={80} color='18DD98'/>
            </div>

            <div className='flex flex-col justify-center items-center md:items-start md:mx-20'>
                <h3 className='font-inter font-bold text-4xl md:text-5xl'>Strategy<span className='text-light1 font-inter font-bold text-4xl'>.</span></h3>
                <p className='text-center md:text-left font-inter text-slate-300 font-medium my-4'>Create a unique and timeless <br /> design</p>
            </div>

        </div>
        
        {/* Design */}
        <div className='flex flex-col md:flex-row md:gap-8 md:text-2xl md:mb-10 justify-center items-center'>

            <div className=' h-40 w-40 md:h-56 md:w-56 bg-dark1  rounded-xl drop-shadow-3xl my-3 items-center text-center flex flex-col justify-center'>
            < TfiRulerPencil size={80} color='18DD98'/>
            </div>

            <div className='flex flex-col justify-center items-center md:items-start md:mx-20'>
                <h3 className='font-inter font-bold text-4xl md:text-5xl'>Design<span className='text-light1 font-inter font-bold text-4xl'>.</span></h3>
                <p className='text-center md:text-left font-inter text-slate-300 font-medium my-4'>From idea visualisation to the<br />the stage</p>
            </div>

        </div>
        
        {/* Development */}
        <div className='flex flex-col md:flex-row md:gap-8 md:text-2xl md:mb-10 justify-center items-center'>

            <div className=' h-40 w-40 md:h-56 md:w-56 bg-dark1  rounded-xl drop-shadow-3xl my-3 items-center text-center flex flex-col justify-center'>
            <FaLaptopCode size={80} color='18DD98'/>
            </div>

            <div className='flex flex-col justify-center items-center md:items-start md:mx-20'>
                <h3 className='font-inter font-bold text-4xl md:text-5xl'>Development<span className='text-light1 font-inter font-bold text-4xl'>.</span></h3>
                <p className='text-center md:text-left font-inter text-slate-300 font-medium my-4'>Step by step in curating the  <br /> design</p>
            </div>

        </div>
        
        {/* Testing */}
        <div className='flex flex-col md:flex-row md:gap-8 md:text-2xl md:mb-10 justify-center items-center'>

            <div className=' h-40 w-40 md:h-56 md:w-56 bg-dark1  rounded-xl drop-shadow-3xl my-3 items-center text-center flex flex-col justify-center'>
            <BsClipboard2Check size={80} color='18DD98'/>
            </div>

            <div className='flex flex-col justify-center items-center md:items-start md:mx-20'>
                <h3 className='font-inter font-bold text-4xl md:text-5xl'>Testing<span className='text-light1 font-inter font-bold text-4xl'>.</span></h3>
                <p className='text-center md:text-left font-inter text-slate-300 font-medium my-4'>Finished product has to be in <br />working condition</p>
            </div>

        </div>
        
        
        {/* Deployment */}
        <div className='flex flex-col md:flex-row md:gap-8 md:text-2xl md:mb-10 justify-center items-center'>

            <div className=' h-40 w-40 md:h-56 md:w-56 bg-dark1  rounded-xl drop-shadow-3xl my-3 items-center text-center flex flex-col justify-center'>
            <MdOutlineRocketLaunch size={80} color='18DD98'/>
            </div>

            <div className='flex flex-col justify-center items-center md:items-start md:mx-20'>
                <h3 className='font-inter font-bold text-4xl md:text-5xl'>Deployment<span className='text-light1 font-inter font-bold text-4xl'>.</span></h3>
                <p className='text-center md:text-left font-inter text-slate-300 font-medium my-4'>Shipping out  finished product<br />to client</p>
            </div>

        </div>
        
    </section>
    
</div>

  )
}
