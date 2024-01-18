import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Popup from '../popup/Popup';
export const Contact = () => {

  const [sent, setSent] = useState();
  const [popup, setPopup] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7yk4kr5', 'template_0gcpl9k', form.current, 'H_sOohQEuRtnyX6M0')
      .then((result) => {
          console.log(result.text);
          setSent(true);
          setPopup(true);
          setTimeout(() => {
            setPopup(false);
          }, 3000);
          e.target.reset();
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

<section className="bg-black font-inter">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
      <h2 className='flex w-fit border-4 border-r-0 border-l-0 border-t-0 border-light1 font-semibold text-2xl font-poppins md:text-3xl sm:2xl sm:font-medium py-8 max-w-[130px] mb-10 sm:ml-10 mx-auto text-white'>Let's talk.</h2>

      <p className='text-white my-4 text-center'>I'd like to get in touch with you. Tell me your full name, email address and a personalised message of a project you'd like to work on.</p>

      <p className='text-white text-center'>For any questions click on the phone number and email at the bottom of the page.</p>

        <div className="mt-8">

        </div>
      </div>

      <div className=" mt-40 rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      {popup && <Popup/>}
      {/* form */}
        <form action="" className="space-y-4" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="sr-only" htmlFor="name required">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              name="user_name"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                name='user_email'
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-slate-400 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                name='user_phone'
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center p-3 bg-slate-100 rounded-md">
            <p className='border-l-light1 border-l-[2px] p-2 text-xs font-light font-inter text-gray-400 border-'>Tell me about your project, The purpose of the project and the problems I can help you solve. </p>
          </div>
         
          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-600 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name='message'
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              value={"Send"}
              className="inline-block w-full rounded-lg bg-light1 px-5 py-3 font-medium font-inter text-black sm:w-auto active:bg-teal-700 active:text-black"
            >
              Send Enquiry
            </button>
          </div>
        </form>
        
      </div>
    </div>
  </div>

    <div className="font-light flex flex-col items-center">
          <a href="mailto:phiri3000noel@gmail.com" className="text-md text-white font-sans pb-2">
            <p>phirinoel3000@gmail.com</p>
          </a>

          <a href="tel:+265884222981"className='font-sans font-light text-white pt-2'>Call +265-884-222-981</a>

          <br />

          <p className="mb-4 not-italic text-gray-400">
            Noel Phiri 2023 &copy;
          </p>
    </div>

</section>
  )
}

