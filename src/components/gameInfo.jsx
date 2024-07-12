import React from 'react'
import pineTree from '../assets/pine-tree.png'

export function GameInfo () {
  const [gameInfoOpen, setgameInfoOpen] = React.useState(1);
  const handleTitle = (e) => {
    setgameInfoOpen(e)
  }
  function checkClick() {
    console.log (gameInfoOpen)
  }

  return(
    <div className="h-screen flex justify-center items-start flex-col overflow-x-hidden text-blue-700">
      <h1 className="border-2 py-5 px-[100px] text-2xl"> Game Info </h1>
      <div className="h-full flex w-full">
        <section className="flex justify-center items-center gap-10 border-2 w-[60%] pl-10 h-[90%]">
          <div className="border-2  text-xl flex justify-center items-center flex-col min-w-[20%] h-full gap-10">
            <button className=" px-2 border-2 border-black w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(1); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-black after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===1 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Title 1 
            </p>
            </button>
            <button className=" px-2 border-2 border-black w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(2); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-black after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===2 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Title 2 
            </p>
            </button>
            <button className=" px-2 border-2 border-black w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(3); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-black after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===3 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Title 3 
            </p>
            </button>
            <button className=" px-2 border-2 border-black w-full text-center
            relative  transition-all ease-in-out  " type="button" onClick={() => {handleTitle(4); checkClick(); }}> 
            <p className={'after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-black after:origin-center after:h-full after:w-0 after:right-[0%]' + (gameInfoOpen===4 ? " after:w-[12%]": " hover:after:w-[12%]")}>
              Title 4 
            </p>
            </button>

          </div>
          <div className={" h-full flex-col justify-center items-center gap-10" + (gameInfoOpen===1 ? " flex": " hidden")}>
            <h2 className="text-2xl"> Title of Paragraph1 </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-10" + (gameInfoOpen===2 ? " flex": " hidden")}>
            <h2 className="text-2xl"> Title of Paragraph2 </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-10" + (gameInfoOpen===3 ? " flex": " hidden")}>
            <h2 className="text-2xl"> Title of Paragraph3 </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
          </div>
          <div className={" h-full flex-col justify-center items-center gap-10" + (gameInfoOpen===4 ? " flex": " hidden")}>
            <h2 className="text-2xl"> Title of Paragraph4 </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
          </div>
        </section>
        <section className="pl-10  pb-[100px] flex justify-center items-center w-[40%] select-none">
          <div className="bg-game-pattern-one relative h-[400px] w-[400px]  bg-cover bg-no-repeat border-2 rotate-45">
            <img src={pineTree} alt="Pine Tree" className='rotate-[-45deg]' />
            
          </div>
        </section>
      </div>
    
    </div>
    
  )
}