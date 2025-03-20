import React from 'react'
import { forwardRef } from 'react';
import pineTree from '../assets/pine-tree.png'
import { Parallax } from 'react-scroll-parallax';

export default forwardRef (function GameInfo(props,ref) {
  const [gameInfoOpen, setgameInfoOpen] = React.useState(1);
  const handleTitle = (e) => {
    setgameInfoOpen(e)
  }
  function checkClick() {
    console.log (gameInfoOpen)
  }

  return(
    <div {...props} ref={ref} className="min-h-screen flex  gap-[50px] items-start flex-col overflow-x-hidden overflow-y-hidden text-white bg-[#3183C5] lg:bg-game-info-background bg-left bg-no-repeat  bg-[length:85%] lg:pb-0 pb-10">
      <div className='relative'>
        <h1 className=" py-5 px-[100px] text-2xl game-info-top"> Game Info </h1>
      </div>
      
      <div className="h-full flex w-full flex-col lg:flex-row justify-center items-center pb-10 px-5 pt-[4rem] gap-36 lg:gap-0">
        <section className="flex justify-center items-center gap-10  lg:w-[60%] w-full p-10 min-h-[450px] h-[90%] lg:border-none border-2 rounded-md lg:bg-transparent bg-[#315A83]">
          <div className="  text-sm md:text-xl flex justify-center items-center flex-col min-w-[110px] md:min-w-[20%] h-full gap-10">
            <button className=" px-2 border-2 border-white w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(1); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white  after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===1 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Adapt
            </p>
            </button>
            <button className=" px-2 border-2 border-white w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(2); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===2 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Slay Aliens 
            </p>
            </button>
            <button className=" px-2 border-2 border-white w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(3); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===3 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Explore  
            </p>
            </button>
            <button className=" px-2 border-2 border-white w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(4); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===4 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Conquest
            </p>
            </button>

          </div>
          <div className={" h-full flex-col justify-center items-center gap-5 md:gap-10" + (gameInfoOpen===1 ? " flex": " hidden")}>
            <h2 className="text-xl font-semibold md:font-normal md:text-4xl "> Adapt To Survive </h2>
            <p className="text-xs md:text-lg"> In Kol Slayer, explore a hostile alien planet where danger lurks at every turn. Master the art of quick weapon-switching as you face relentless enemies, shifting terrains, and dynamic environments. Choose the right gear, adapt to new challenges, and survive in a world where only the adaptable thrive.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-5 md:gap-10" + (gameInfoOpen===2 ? " flex": " hidden")}>
            <h2 className="text-xl font-semibold md:font-normal md:text-4xl"> Slay Hordes of Aliens </h2>
            <p className="text-xs md:text-lg"> Waves of relentless extraterrestrial enemies never cease. Armed with powerful weapons and explosive abilities, you must fight for survival against endless hordes. Adapt your strategy, upgrade your arsenal, and see how long you can last in this high-octane battle for survival.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-5 md:gap-10" + (gameInfoOpen===3 ? " flex": " hidden")}>
            <h2 className="text-xl font-semibold md:font-normal md:text-4xl"> Explore and Uncover Secrets </h2>
            <p className="text-xs md:text-lg"> In Kol Slayer, journey across a vast alien planet, teeming with hidden secrets and untapped resources. As a lone explorer, gather rare materials to craft powerful gear, uncover ancient mysteries, and face fierce alien beasts. Explore uncharted territories, unlock the planet’s secrets, and become the ultimate Kol Slayer.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-5 md:gap-10" + (gameInfoOpen===4 ? " flex": " hidden")}>
            <h2 className="text-xl font-semibold md:font-normal md:text-4xl"> Conquest Is Your Goal </h2>
            <p className="text-xs md:text-lg"> As you land on a mysterious alien planet teeming with powerful adversaries and unknown dangers. To grow stronger, you must claim and conquer hostile territories, harness their resources, and unlock new abilities. Every victory brings power, but the planet fights back—only the strongest will dominate and survive.</p>
          </div>
        </section>
        <section className='pl-0 md:pl-10  pb-[110px] flex justify-center items-center w-[40%] select-none'>
        <Parallax speed={-5} >
          <div className="  ">
            <div className=" z-20 relative bg-game-pattern-one lg:h-[400px] lg:w-[400px] h-[200px] w-[200px] md:h-[300px] md:w-[300px] bg-cover bg-no-repeat border-2 rotate-45 ">
            <Parallax speed={-10} >
            <img src={pineTree} alt="Pine Tree" className='rotate-[-45deg] lg:h-[400px] lg:w-[400px] h-[200px] w-[200px] md:h-[300px] md:w-[300px]' />
            </Parallax>
            </div>
            <svg width="400" height="400" viewBox="0 0 309 309" fill="none" xmlns="http://www.w3.org/2000/svg" className='z-10 absolute lg:top-[20%] top-[-50px] lg:right-[-50px] right-[-80px] md:right-[-150px] h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] '>
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
})