import { React, useState } from 'react'

export const Tech = () => {

  const Image = ({ name, src }) => {
    const [showPopup, setShowPopup] = useState(false);
   
    return (
       <div
         className="relative"
         onMouseEnter={() => setShowPopup(true)}
         onMouseLeave={() => setShowPopup(false)}
       >
         <img className="w-32 h-32" src={src} alt={name} />
         {showPopup && (
           <div className="absolute bottom-0 left-0 bg-black text-white p-2">
             {name}
           </div>
         )}
       </div>
    );
   };

  return (
    <div>
         <div className='flex justify-center w-full bg-dark1 text-white py-18 px-4 border-t-0'>
         <h2 className='flex w-20 border-4 border-r-0 border-l-0 border-t-0 border-light1 text-2xl font-semibold font-poppins md:text-3xl sm:2xl sm:font-medium py-8 max-w-[130px] mb-10 sm:ml-40 mx-auto'>Tech stack</h2>
         </div>

        {/* logos */}
        <section className='flex flex-col md:flex-row lg:flex-row justify-center items-center max-w-[1000px] px-6 gap-20 sm:gap-4 mx-auto'>
  
          {/* Left Column */}
          <div className='flex flex-wrap items-center justify-center max-h-[800px] gap-20'>

            <div className="flex flex-col justify-center items-center"><img data-tool- name= "Figma" src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&q=75&fit=max&auto=format&dpr=2" alt="" className='w-12 h-12 sm:h-16 sm:w-16  ' />
            <p className='font-inter font-light text-slate-400 text-md mt-1'>Figma</p></div>
            
            <div className="flex flex-col items-center justify-center"><img src="https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" alt="" className='w-10 h-10 sm:h-16 sm:w-16' />
            <p className='font-inter font-light text-slate-400 text-md mt-2'>AdobeXD</p></div>

            <div className="flex flex-col items-center justify-center"><img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="" className='w-10 h-10 sm:h-14 sm:w-14 ' />
            <p className='font-inter font-light text-slate-400 text-md mt-2'>CSS</p></div>

            <div className="flex flex-col items-center justify-center"><img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" className='w-10 h-10 sm:h-16 sm:w-16' />
            <p className='font-inter font-light text-slate-400 text-md mt-2'>HTML</p></div>

            <div className="flex flex-col items-center justify-center"><img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="" className='w-10 h-10 sm:h-16 sm:w-16 rounded-md' />
            <p className='font-inter font-light text-slate-400 text-md mt-2'>Javascript</p></div> 
            
          </div>

          {/* Right Column */}
          <div className='flex flex-wrap gap-20 items-center justify-center'>

          <div className="flex flex-col items-center justify-center"><img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="" className='w-10 h-10 sm:h-16 sm:w-16' />
            <p className='font-inter font-light text-slate-400 text-md mt-2'>nodejs</p></div>
            
            <div className="flex flex-col items-center justify-center"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" className='w-10 h-10 sm:h-16 sm:w-16' />
            <p className='font-inter font-light text-slate-400 text-md mt-2'>React</p></div>
            
            <div className="flex flex-col items-center justify-center"><img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="" className='w-10 h-10 sm:h-16 sm:w-16' />
            <p className='font-inter font-light text-slate-400 text-md mt-2'>Tailwindcss</p>
            </div>
            
            <div className="flex flex-col items-center justify-center"><img src="https://upload.vectorlogo.zone/logos/expressjs/images/a1b5cb1f-dae7-4971-ab5b-68efce751b0f.svg" alt="" className='w-10 h-10 sm:h-16 sm:w-16' />
              <p className='font-inter font-light text-slate-400 text-md mt-2'>expressJS</p>
            </div>

            <div className="flex flex-col items-center justify-center"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="" className='w-10 h-10 sm:h-16 sm:w-16' />
            <p className='font-inter font-light text-slate-400 text-md mt-2'>Firebase</p></div>
            
          </div>

        </section>

          <div className='flex flex-col text-center mt-20 text-white font-inter font-semibold text-3xl md:text-5xl gap-4'>
            <p className='text-sm md:text-lg text-slate-400'>Get it all in one place.</p>
            <h2><span className='text-light1 '>D</span>esign</h2>
            <h2>development</h2>
            <h2>deployment<span className='text-4xl text-light1'>.</span></h2>
          </div>

    </div>
  )
}
