import React from "react";
import Technologies from "../Components/Technologies";
import Cta from "../Components/Cta";

const MERN = () => {
  return (
   <>
   <section className="relative overflow-hidden">
  <div className="relative inset-0">
    <img className="object-cover w-full h-[500px]" src="/MERN-1024x576.png" />
  </div>
  {/* <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" /> */}
  {/* <div className="absolute inset-0 block bg-black/60 md:hidden" />
  <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Comprehensive Web Development Services</h2>
      <p className="mt-4 text-base text-gray-200">Offering expert web development services that include both front-end (user interface) and back-end (server-side) development to create and maintain high-quality websites tailored to your needs.</p>        

        <div className="mt-10 space-x-4">
      <a href="/Contact_us" className=" text-white font-bold text-sm px-10 py-4 button-primary text-center cursor-pointer rounded-lg max-w-[200px] duration-300 z-40" >
      Lets Talk</a>
      </div>
    </div>
  </div> */}

</section>

<section className="py-10 bg-[#03001417] backdrop-blur-md sm:py-16 lg:py-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Transforming Modern Web Development with the MERN Stack</h2>
      <p className="mt-4 text-base text-gray-200">The MERN stack, composed of MongoDB, Express.js, React, and Node.js, is ideal for modern web development. It combines a NoSQL database with robust back-end and front-end frameworks to build scalable, dynamic applications. This stack streamlines the development process from server to user interface.</p> 
    </div>
  </div>

<div className="max-w-5xl mx-auto text-white mt-32">
  <div className="text-center max-w-2xl mx-auto">
    {/* <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Benefits of MERN</h2> */}
    {/* <p className="text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p> */}
  </div>
  <div className="mt-16">
    <div className="grid md:grid-cols-2 items-center gap-16">

{/* feature1 */}
      <div>
        <img src="https://readymadeui.com/image-1.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Fast</h3>
        <p className="text-gray-200">With React component-based architecture and Node.js non-blocking nature, the MERN stack facilitates rapid development and high performance. React's reusable components and Node.js efficient handling of asynchronous operations speed up the development cycle.</p>
      </div>

{/* feature2 */}
      <div className="max-md:order-3 my-16">
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Scalability</h3>
        <p className="text-gray-200">MongoDB, being a NoSQL database, can handle large volumes of data and scale horizontally. This makes it an ideal choice for applications expecting high traffic and extensive data handling.</p>
      </div>
      <div>
        <img src="https://readymadeui.com/contact.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>


{/* feature3 */}
      <div className="">
        <img src="/Code typing-pana.svg" className="p-10 w-full h-[300px] object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
      </div>
      <div>
        <h3 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6 text-white">Versatile and Flexible</h3>
        <p className="text-gray-200">The MERN stack is highly versatile, suitable for building a variety of applications, from single-page applications (SPAs) to complex enterprise solutions. Its flexibility allows developers to customize and extend functionalities as needed.</p>
      </div>

    </div>
  </div>
</div>

{/* <FAQSection/> */}
<Cta/>
</section>
   </>
  );
};

export default MERN;
