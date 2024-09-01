import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";



// Scroll to Section Watch this 
// https://www.youtube.com/watch?v=oszUqCqTGHo
// or How to Scroll to an Element in React
// https://spacejelly.dev/posts/how-to-scroll-to-an-element-in-react


export function NavBarTest() {
  const [navbarOpen, setNavbarOpen] =React.useState(false)
  return (
    <div className="min-h-screen bg-hero-pattern bg-no-repeat bg-center overflow-x-hidden pb-5 lg:text-readability">
      <section className="flex justify-evenly items-center gap-10  py-3 lg:flex-row flex-col w-full ">
          {/* !!!!!!!!!! */}
        <div className="flex justify-between w-full"> 
          {/* !!!!!!!!!  */}
        <button className="btn group flex items-center bg-transparent p-2 px-6 text-3xl font-thin tracking-widest text-white">
        <span className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-11/12 after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 lg:text-readability ">Game Name</span>

        </button>
        <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={()=> setNavbarOpen(!navbarOpen)}>
        <FaBarsStaggered className="text-xl relative"/>
        </button>
        </div>
        <div className={"lg:flex  items-center h-full gap-10 lg:flex-row flex-col lg:pr-10   p-5 " + (navbarOpen ? " flex" : " hidden")}>

          <div>
          <ul className="flex justify-center items-center gap-10 text-white h-full lg:flex-row flex-col ">
            <li className=' h-full flex justify-center items-center px-2  
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
            '> 
              <a href="null">
                <p className='text-lg  '>
                  Home
                </p>
              </a>
            </li>
            <li className='h-full flex justify-center items-center px-2  
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> 
              <a href="null">
                <p className='text-lg'>
                  Game
                </p>
              </a>
            </li>
            <li className='h-full flex justify-center items-center px-2  
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> 
              <a href="null">
                <p className='text-lg'>
                  Weapons
                </p>
              </a>
            </li>
            <li className='h-full flex justify-center items-center px-2  
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> 
              <a href="null">
                <p className='text-lg'>
                  Media
                </p>
              </a>
            </li>
            <li className='h-full flex justify-center items-center px-2  
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> 
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
          lg:after:content-['\_\_\_\_\_\_\_\_\_\_\_\_'] 
          after:absolute 
          after:translate-y-2/4 
          after:left-[calc(100%+8px)] 
          after:w-3 
          after:h-px 
          after:top-[-54%]
          lg:flex-row
          pb-5
          lg:pb-0
          
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


      </section>
      <section className="text-white h-[60vh] flex justify-start lg:justify-center items-center flex-col gap-20">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[120px] select-none "> Game Name</h1>
          <p className="text-4xl select-none "> Catchprase Words Here</p>
        </div>
        <div className="flex flex-col gap-5 ">
          <button>
            <p className="hero-button hero-button-one text-readability">
              Buy Now
            </p>
          </button>
          <button>
            <p className="hero-button hero-button-two text-readability">
              Watch The Trailer
            </p>
          </button>
        </div>
      </section>
    </div>
  )
}
