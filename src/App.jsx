import { useEffect,useState,useRef } from 'react'
import Design from './components/Design'
import { Contact } from './components/contact/Contact'
import { Hero } from './components/hero/Hero'
import { Process } from './components/process/Process'
import { Services } from './components/services/Services'
import { Tech } from './components/techStack/Tech'
import { Scrollbtn } from './components/scrollButton/Scrollbtn'
import { Loading } from './components/loading/Loading'
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";


function App() {
  const HomeRef = useRef(null);
  const ServicesRef = useRef(null);
  const TechRef = useRef(null);
  const ProcessRef = useRef(null);
  const ContactRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       // Simulate an asynchronous action, e.g., fetching data from an API
       setTimeout(() => {
         setIsLoading(false);
       }, 4000);
    }, []);

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    }

    const goHome = () => 
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth",  
    }); 
  
    const goServices = () => 
    window.scrollTo({ 
      top: ServicesRef.current.offsetTop, 
      behavior: "smooth",  
    }); 
  
    const goTech = () => 
    window.scrollTo({ 
      top: TechRef.current.offsetTop, 
      behavior: "smooth",  
    }); 
  
    const goProcess = () => 
    window.scrollTo({ 
      top: ProcessRef.current.offsetTop, 
      behavior: "smooth",  
    }); 
  
    const goContact = () => 
    window.scrollTo({ 
      top: ContactRef.current.offsetTop, 
      behavior: "smooth",  
    }); 



  return (

    <div>
      {isLoading ? (
        <Loading />
      ) : (
      <div className='overflow-x-hidden bg-dark1'>

      <div className="w-full h-screen bg-banner bg-no-repeat bg-center bg-cover">
      {/* navigation */}

      <nav className='z-10 fixed w-full items-center focus:outline-none'>
  
        <section className='flex justify-between items-center h-20 max-w-[1440px] mx-auto px-4 text-white bg-none'>
    
          <h1 className='text-white font-poppins font-semibold text-xl cursor-pointer'><button onClick={goHome}>Noel Phiri<span className='text-light1'>.</span></button></h1>
          <ul className='text-sm font-normal font-inter hidden md:flex justify-center items-center'>
            <li 
            className='p-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goHome}>Home</button></li>

            <li className='p-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goServices}>Services</button></li>
            <li className='p-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goTech}>Tech</button></li>
            <li className='p-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goProcess}>Process</button></li>
            <li className='p-4 hover:text-light1 duration-300 cursor-pointer'><button className='p-2 rounded-md bg-white text-black hover:bg-light1 active:scale-[1.1] duration-300 font-bold' onClick={goContact}>Contact</button></li>
          </ul>
    
          <div onClick={handleNav} className='block md:hidden ease-in-out-duration-500'>
            {!nav ? <HiOutlineMenu size={30}/> : <HiOutlineXMark size={30}/>}
          </div >
    
          <div className={nav ? 'fixed left-0 top-16 w-full sm:w-1/2 sm:h-2/3 h-3/4 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-0 top-[-100%] w-full sm:w-1/2 sm:h-2/3 h-1/2 backdrop-blur-sm bg-white/30'}>
    
            <ul className='px-auto py-10  font-light text-2xl font-inter flex  flex-col items-center text-white'>
              <li className='p-4 py-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goHome} >Home</button></li>
              <li className='p-4 py-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goServices}>Services</button></li>
              <li  className='p-4 py-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goTech}>Tech</button></li>
              <li className='p-4 py-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goProcess}>Process</button></li>
              <li className='p-4 py-4 hover:text-light1 duration-300 cursor-pointer'><button onClick={goContact}>Contact</button></li>
            </ul>
          </div>
    
        </section>
  
      </nav>

      <div ref={HomeRef}><Hero/></div>
      <Design/>
      </div>

      <div ref={ServicesRef}><Services/></div>
      <div ref={TechRef}><Tech/></div>
      <div ref={ProcessRef}><Process/></div>
      <Scrollbtn/>
      <div ref={ContactRef}><Contact/></div>
      </div>    
      )}
    </div>
      
  )
}

export default App
