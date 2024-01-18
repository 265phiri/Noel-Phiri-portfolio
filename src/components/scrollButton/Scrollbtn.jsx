import { useEffect } from "react";

export const Scrollbtn = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div className="bg-dark1 my-10 flex items-center justify-end rounded-full">
      <button onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className='mr-4 bg-light1 p-2 h-12 w-12 rounded-full flex justify-center items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m3.293 11.293 1.414 1.414L11 6.414V20h2V6.414l6.293 6.293 1.414-1.414L12 2.586l-8.707 8.707z"/></svg>
      </button>
    </div>
  )
}
