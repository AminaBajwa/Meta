// "use client"
// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Contact_us = () => {

//   const form = useRef(null);
//   const [confirmationMessage, setConfirmationMessage] = useState('');

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
  

//     if (form.current) {
//       emailjs
//         .sendForm('service_5az9x9x', 'template_7vnqxth', form.current, {
//           publicKey: 'Zv4J71vDI6dkJFHNP',
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//             setConfirmationMessage('Email sent successfully!');
//             setTimeout(() => {
//               setConfirmationMessage('');
//             }, 5000); // Hide the confirmation message after 5 seconds
//             toast.success('Email sent successfully!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//             toast.error('Failed to send email.');
//           },
//         );
//     }
//   };


"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact_us = () => {

  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_5az9x9x', 'template_7vnqxth', form.current, 'Zv4J71vDI6dkJFHNP')
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success('Email sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('Failed to send email.');
          },
        );
    }
  };

  return (
    <>

<div className="flex flex-col gap-20  max-w-full mx-auto relative overflow-hidden z-10 bg-[#030014] rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
<section className="py-10 sm:py-16 lg:py-24 ">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">Contact us</h2>
      <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Get in touch with us to discuss your project needs. Our team is ready to assist you with expert solutions and support.</p>
    </div>
    <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
      <div id="containerr" className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">

        <div className="card flex flex-col justify-center items-center">
        <span className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        </span>
        <h4>Phone</h4>
        <p className="mt-6 text-md font-medium text-gray-200">+92 345 6699233</p>
        <p className="mt-1 text-md font-medium text-gray-200">+92 337 1212048</p>
    <div className="shine" />
    <div className="background">
        <div className="tiles">
            <div className="tile tile-1" />
            <div className="tile tile-2" />
            <div className="tile tile-3" />
            <div className="tile tile-4" />
            <div className="tile tile-5" />
            <div className="tile tile-6" />
            <div className="tile tile-7" />
            <div className="tile tile-8" />
            <div className="tile tile-9" />
            <div className="tile tile-10" />
        </div>
      <div className="line line-1" />
      <div className="line line-2" />
      <div className="line line-3" />
    </div>
  </div>
  <div className="card flex flex-col justify-center items-center">
        <span className="icon ">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </span>
        <h4>Phone</h4>
        <p className="mt-6 text-md font-medium text-gray-200">info@metaxperts.net</p>
        <p className="mt-1 text-md font-medium text-gray-200">metaxperts@gmail.com</p>
    <div className="shine" />
    <div className="background">
        <div className="tiles">
            <div className="tile tile-1" />
            <div className="tile tile-2" />
            <div className="tile tile-3" />
            <div className="tile tile-4" />
            <div className="tile tile-5" />
            <div className="tile tile-6" />
            <div className="tile tile-7" />
            <div className="tile tile-8" />
            <div className="tile tile-9" />
            <div className="tile tile-10" />
        </div>
      <div className="line line-1" />
      <div className="line line-2" />
      <div className="line line-3" />
    </div>
  </div>
  <div className="card flex flex-col justify-center items-center">
        <span className="icon ">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </span>
        <h4>Phone</h4>
        <p className="mt-6 text-md font-medium leading-relaxed text-gray-200">Chaina Chock. Alkhalil Center, Sialkot Punjab, Pakistan</p>
    <div className="shine" />
    <div className="background">
        <div className="tiles">
            <div className="tile tile-1" />
            <div className="tile tile-2" />
            <div className="tile tile-3" />
            <div className="tile tile-4" />
            <div className="tile tile-5" />
            <div className="tile tile-6" />
            <div className="tile tile-7" />
            <div className="tile tile-8" />
            <div className="tile tile-9" />
            <div className="tile tile-10" />
        </div>
      <div className="line line-1" />
      <div className="line line-2" />
      <div className="line line-3" />
    </div>
  </div>

  


        {/* <Prac/> */}
      </div>
      <div className="mt-6 overflow-hidden bg-[#18181b] rounded-xl">
        <div className="px-6 py-12 sm:p-12">
          <h3 className="text-3xl font-semibold text-center text-gray-200">Send us a message</h3>
          <form ref={form} onSubmit={sendEmail} className="mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <label className="text-base font-medium text-gray-200"> Your name </label>
                <div className="mt-2.5 relative">
                  <input type="text"
                   placeholder="Enter your full name"
                   name="from_name"
                   required
                   className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" />
                </div>
              </div>
              <div>
                <label   className="text-base font-medium text-gray-200"> Email address </label>
                <div className="mt-2.5 relative">
                  <input type="email"
                   placeholder="Enter your email"
                   name="from_email"
                   required
                   className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" />
                </div>
              </div>
              <div>
                <label   className="text-base font-medium text-gray-200"> Phone number </label>
                <div className="mt-2.5 relative">
                  <input type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" />
                </div>
              </div>
              <div>
                <label   className="text-base font-medium text-gray-200"> Company name </label>
                <div className="mt-2.5 relative">
                  <input type="text"
                  placeholder="Enter your company name" 
                  name="from_company"
                  className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label   className="text-base font-medium text-gray-200"> Message </label>
                <div className="mt-2.5 relative">
                  <textarea placeholder=""
                  name="message"
                   required
                   className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md resize-y focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" rows={4} defaultValue={""} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-700 button-primary border border-transparent rounded-md focus:outline-none">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<div style={{ width: '100%' }}>
      <iframe
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        // marginHeight="0"
        // marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chaina%20Chock,%20Alkhalil%20Center,%20%20Room%20310.%20Sialkot%20Pakistan+(MetaXperts)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Google Map"
      >
        <a href="https://www.gps.ie/">gps tracker sport</a>
      </iframe>
    </div>
</div>

<ToastContainer />
    </>
  )
}

export default Contact_us;