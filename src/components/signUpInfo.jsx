import React from "react"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { Parallax } from "react-scroll-parallax"

export function SignUp () {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center  text-white bg-[#3183C5]">
      <section className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl"> Learn More </h1>
          <form className="w-[400px] mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none h-[50px]">
                <svg className="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
              </div>
              <input type="text" className="bg-[#315A83] border border-[#315A83]  text-lg rounded-md focus:outline-none focus:border-white focus:ring-sky-500 block w-full  ps-10 p-2.5 " placeholder="Enter Your Email"/>

              <button type="submit" className="text-xl  p-[10px] w-full "> Newsletter Sign Up </button>
            </div>
          </form>
      </section>
      <section className="flex justify-center items-center gap-6 py-[20px]">
        <div>
        <div className="flex justify-center align items-center gap-9 text-white
          after:block
          relative
          after:content-[''] 
          after:absolute 
          after:translate-y-2/4 
          after:left-[calc(100%+8px)] 
          after:w-3 
          after:h-px 
          after:top-[-54%]
          lg:flex-row
          
        ">
          <span className="before:block before:absolute before:-inset-1 before:-rotate-45 before:border before:border-white relative inline-block 
          hover:before:border-2
          after:content-['\_\_\_'] 
          after:absolute 
          after:translate-y-2/4 
          after:left-[calc(100%+8px)] 
          after:w-3 
          after:h-px 
          after:top-[-54%]
           ">

            <FaInstagram className="text-xl relative"/>
          </span>
          <span className="before:block before:absolute before:-inset-1 before:-rotate-45 before:border before:border-white relative inline-block
          hover:before:border-2
          after:content-['\_\_\_'] 
          after:absolute 
          after:translate-y-2/4 
          after:left-[calc(100%+8px)] 
          after:w-3 
          after:h-px 
          after:top-[-54%]">
            <FaFacebook className="text-xl relative"/>
          </span>
          <span className="before:block before:absolute before:-inset-1 before:-rotate-45 before:border before:border-white relative inline-block
          hover:before:border-2
          after:content-['\_\_\_'] 
          after:absolute 
          after:translate-y-2/4 
          after:left-[calc(100%+8px)] 
          after:w-3 
          after:h-px 
          after:top-[-54%]">
            <FaXTwitter className="text-xl relative"/>
          </span>
          <span className="before:block before:absolute before:-inset-1 before:-rotate-45 before:border before:border-white relative inline-block
          hover:before:border-2
          after:content-['\_\_\_'] 
          after:absolute 
          after:translate-y-2/4 
          after:left-[calc(100%+8px)] 
          after:w-3 
          after:h-px 
          after:top-[-54%]">
            <FaDiscord className="text-xl relative"/>
          </span>
          <span className="before:block before:absolute before:-inset-1 before:-rotate-45 before:border before:border-white relative inline-block
          hover:before:border-2">
            <FaYoutube className="text-xl relative"/>
          </span>
 

        </div>
        </div>
        <div>
          <button className="text-3xl p-5 border-2">Buy Now</button>
        </div>
      </section>
    </div>
  )
}