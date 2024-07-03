import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




// Scroll to Section Watch this 
// https://www.youtube.com/watch?v=oszUqCqTGHo


export function NavBarTest() {
  return (
    <div>
      <section className="flex justify-evenly align items-center gap-10 bg-blue-700 py-5">
        <div> 
  

        <button class="btn group flex items-center bg-transparent p-2 px-6 text-3xl font-thin tracking-widest text-white">
        <span class="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-11/12 after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Game Name</span>

  </button>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-10 text-white">
            <li className=''> 
              <a href="null">
                <p className='text-lg'>
                  Home
                </p>
              </a>
            </li>
            <li className=''> 
              <a href="null">
                <p className='text-lg'>
                  Game
                </p>
              </a>
            </li>
            <li className=''> 
              <a href="null">
                <p className='text-lg'>
                  Weapons
                </p>
              </a>
            </li>
            <li className=''> 
              <a href="null">
                <p className='text-lg'>
                  Media
                </p>
              </a>
            </li>
            <li className=''> 
              <a href="null">
                <p className='text-lg '>
                  SignUp Now!
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

      </section>
    </div>
  )
}