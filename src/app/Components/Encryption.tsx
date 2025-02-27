"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/app/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="font text-[40px] font-bold text-center text-gray-200"
        >
           <h1 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Performance & Security</h1>
          
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-rfrom-[#a29347] to-[#1d4137]">
            {" "}
            &{" "}
          </span> */}
          
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <img
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <img
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px] bg-[#1d4137]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="font cursive text-[20px] font-medium text-center text-gray-300">
          <p className="text-lg mb-8 text-gray-400">Secure your data with end-to-end encryption</p>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.mp4/"
        />
      </div>
    </div>
  );
};

export default Encryption;
