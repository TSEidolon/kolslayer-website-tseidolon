import React from 'react'
import pineTree from '../assets/pine-tree.png'
import { Parallax } from 'react-scroll-parallax';

export function GameInfo () {
  const [gameInfoOpen, setgameInfoOpen] = React.useState(1);
  const handleTitle = (e) => {
    setgameInfoOpen(e)
  }
  function checkClick() {
    console.log (gameInfoOpen)
  }

  return(
    <div className="h-screen flex justify-center items-start flex-col overflow-x-hidden overflow-y-hidden text-white bg-[#3183C5] bg-game-info-background bg-left bg-no-repeat bg-[length:75%]">
      <div className='relative'>
        <h1 className=" py-5 px-[100px] text-2xl game-info-top"> Game Info </h1>
      </div>
      
      <div className="h-full flex w-full">
        <section className="flex justify-center items-center gap-10  w-[60%] pl-10 h-[90%] ">
          <div className="  text-xl flex justify-center items-center flex-col min-w-[20%] h-full gap-10">
            <button className=" px-2 border-2 border-white w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(1); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===1 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Title 1 
            </p>
            </button>
            <button className=" px-2 border-2 border-white w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(2); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===2 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Title 2 
            </p>
            </button>
            <button className=" px-2 border-2 border-white w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(3); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===3 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Title 3 
            </p>
            </button>
            <button className=" px-2 border-2 border-white w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(4); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===4 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Title 4 
            </p>
            </button>

          </div>
          <div className={" h-full flex-col justify-center items-center gap-10" + (gameInfoOpen===1 ? " flex": " hidden")}>
            <h2 className="text-4xl "> Title of Paragraph1 </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-10" + (gameInfoOpen===2 ? " flex": " hidden")}>
            <h2 className="text-4xl"> Title of Paragraph2 </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-10" + (gameInfoOpen===3 ? " flex": " hidden")}>
            <h2 className="text-4xl"> Title of Paragraph3 </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-10" + (gameInfoOpen===4 ? " flex": " hidden")}>
            <h2 className="text-4xl"> Title of Paragraph4 </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
          </div>
        </section>
        <section className='pl-10  pb-[110px] flex justify-center items-center w-[40%] select-none'>
        <Parallax speed={10} >
          <div className="  ">
            <div className=" z-20 relative bg-game-pattern-one h-[400px] w-[400px]  bg-cover bg-no-repeat border-2 rotate-45 ">
            <Parallax speed={10} >
            <img src={pineTree} alt="Pine Tree" className='rotate-[-45deg] h-[400px] w-[400px]' />
            </Parallax>
            </div>
            <svg width="500" height="500" viewBox="0 0 309 309" fill="none" xmlns="http://www.w3.org/2000/svg" className='z-10 absolute top-[20%] right-[-50px] '>
<rect x="154.221" y="0.707107" width="217.102" height="217.102" transform="rotate(45 154.221 0.707107)" stroke="white"/>
<rect x="154.946" y="21.7556" width="186.938" height="186.938" transform="rotate(45 154.946 21.7556)" stroke="white"/>
<rect x="154.946" y="93.8991" width="135.925" height="135.925" transform="rotate(45 154.946 93.8991)" stroke="white"/>
<rect x="155.357" y="130.362" width="118.604" height="118.604" transform="rotate(45 155.357 130.362)" stroke="white"/>
</svg>

          </div>
        </Parallax>


        </section>
      </div>
    
    </div>
    
  )
}