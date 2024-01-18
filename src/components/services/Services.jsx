import React from 'react'

export const Services = () => {
  return (
    <div className='flex flex-col w-full bg-none text-white py-20 px-4' id='services'>
            
    <div className='flex justify-center w-full bg-none text-white py-28 px-4 border-t-0'>
 <h2 className='flex w-fit border-4 border-r-0 border-l-0 border-t-0 border-light1 font-semibold text-2xl font-poppins md:text-3xl sm:2xl sm:font-medium py-8 max-w-[130px] mb-10 sm:ml-40 mx-auto'>Services</h2>
 </div>

    <section className=' max-w-[1240px] mx-auto gap-6 md:gap-7 lg:gap-9 justify-center  flex flex-col sm:flex-row items-center justify center'>

        <div className=" flex flex-col items-center justify-center  md:w-56 w-48 sm:mt-0 ">

            <div className='sm:-mt-5 cursor-pointer h-48 w-48 md:h-56 md:w-56 bg-dark1  rounded-xl drop-shadow-2xl items-center text-center flex flex-col justify-center hover:scale-105 duration-300 hover:'>
                <h3 className='font-bold text-4xl md:text-5xl'>UI<span className='text-light1'>/</span>UX</h3>
                <p className='text-xl md:text-2xl'>design</p>
            </div>

            <p className='mt-4 p-4 bg-dark1 text-white text-center text-sm font-inter font-light '>From creating website and application mockups to prototyping, you'll get an in-depth view of how your website is going to look and function, without all the coding hassle.</p>
        </div>

        <div className="sm:-mt-9 flex flex-col items-center justify-center  md:w-56 w-48">
            <div className=' cursor-pointer h-48 w-48 md:h-56 md:w-56 rounded-lg bg-dark1 drop-shadow-2xl  text-center flex flex-col justify-center hover:scale-105 duration-300'>
                <h3 className='font-bold text-4xl md:text-5xl'><span className='text-light1'>&lt;</span>Web<span className='text-light1 text-5xl font-bold'>&gt;</span></h3>
                
                <p className='text-xl md:text-2xl'>developement</p>
            </div>

            <p className=' flex mt-4 p-4 bg-dark1 text-white text-center text-sm font-inter font-light '>I'll spin you up a fully functional, responsive website for your business and personal needs. Let me know what you need and we'll get to work.</p>
        </div>

        <div className="flex sm:-mt-9  flex-col items-center justify-center  md:w-56 w-48">

            <div className='cursor-pointer h-48 w-48 md:h-56 md:w-56 bg-dark1  rounded-xl drop-shadow-2xl items-center text-center flex flex-col justify-center hover:scale-105 duration-300'>
                <h3 className='font-bold text-4xl md:text-5xl'>Copy<span className='text-light1'>.</span></h3>
                <p className='text-xl md:text-2xl'>writing</p>
            </div>

            <p className='mt-4 p-4 bg-dark1 text-white text-center text-sm font-inter font-light '>Have a product but don't know how to market it? Let me know and I'll give your product a voice. From website content writing, blog posts and articles to product.</p>
        </div>
    </section>

    <div className="flex flex-col justify-center items-center md:-ml-10 my-28">
        <h1 className='font-bold font-poppins text-4xl md:text-5xl mx-auto my-2'>2+ years</h1>
        <p className='font-semibold font-inter text-lg'>experience in UI and web design</p>
    </div>
</div>

  )
}
