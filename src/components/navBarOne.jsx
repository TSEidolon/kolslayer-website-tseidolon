import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";



// Scroll to Section Watch this 
// https://www.youtube.com/watch?v=oszUqCqTGHo


export function NavBarTest() {
  const [navbarOpen, setNavbarOpen] =React.useState(false)
  return (
    <div>
      <section className="flex justify-evenly align items-center gap-10 bg-blue-700 pb-2 h-24">
        <div> 
        <button className="btn group flex items-center bg-transparent p-2 px-6 text-3xl font-thin tracking-widest text-white">
        <span className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-11/12 after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Game Name</span>

        </button>
        <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={()=> setNavbarOpen(!navbarOpen)}>
        <FaBarsStaggered className="text-xl relative"/>
        </button>
        </div>
        <div className={"lg:flex flex-grow items-center h-full gap-10" + (navbarOpen ? " flex" : " hidden")}>

          <div>
          <ul className="flex justify-center items-center gap-10 text-white h-full">
            <li className=' h-full flex justify-center items-center px-2 hover:bg-white hover:text-blue-500
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
            '> 
              <a href="null">
                <p className='text-lg  '>
                  Home
                </p>
              </a>
            </li>
            <li className='h-full flex justify-center items-center px-2 hover:bg-white hover:text-blue-500
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> 
              <a href="null">
                <p className='text-lg'>
                  Game
                </p>
              </a>
            </li>
            <li className='h-full flex justify-center items-center px-2 hover:bg-white hover:text-blue-500
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> 
              <a href="null">
                <p className='text-lg'>
                  Weapons
                </p>
              </a>
            </li>
            <li className='h-full flex justify-center items-center px-2 hover:bg-white hover:text-blue-500
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> 
              <a href="null">
                <p className='text-lg'>
                  Media
                </p>
              </a>
            </li>
            <li className='h-full flex justify-center items-center px-2 hover:bg-white hover:text-blue-500
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> 
              <a href="null">
                <p className='text-lg '>
                  SignUp
                </p>
              </a>
            </li>



          </ul>
        </div>
        <div className="flex justify-center align items-center gap-9 text-white
          after:block
          relative
          after:content-['\_\_\_\_\_\_\_\_\_\_\_\_'] 
          after:absolute 
          after:translate-y-2/4 
          after:left-[calc(100%+8px)] 
          after:w-3 
          after:h-px 
          after:top-[-54%]
          
        ">
          <span className="before:block before:absolute before:-inset-1 before:-rotate-45 before:border before:border-white relative inline-block 
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
          after:content-['\_\_\_'] 
          after:absolute 
          after:translate-y-2/4 
          after:left-[calc(100%+8px)] 
          after:w-3 
          after:h-px 
          after:top-[-54%]">
            <FaDiscord className="text-xl relative"/>
          </span>
          <span className="before:block before:absolute before:-inset-1 before:-rotate-45 before:border before:border-white relative inline-block">
            <FaYoutube className="text-xl relative"/>
          </span>
 

        </div>
        </div>


      </section>
    </div>
  )
}