import React from "react"
import sword from "../assets/sword-id-6331871.png"


// const todo = {["cardsDesign"],["background"],["fix useState for cards"]}
export function WeaponsInfo () {
  // const [weaponsInfoOpen, setweaponsInfoOpen] = React.useState(1);
  // const handleTitle = (e) => {
  //   setweaponsInfoOpen(e)
  // }
  return (
    <div className="h-screen flex justify-center items-start flex-col overflow-x-hidden overflow-y-hidden text-white bg-[#3183C5]">
      <div className='relative'>
        <h1 className=" py-5 px-[100px] text-2xl weapons-info-top"> Weapons Info </h1>
      </div>
      <section>
        <div className="h-[100%] flex justify-center items-center gap-[20px] ">
          <div className=" h-[450px] w-[325px] border-black border-2 flex justify-center items-center flex-col">
            <div className="">
              <h2 className="text-3xl"> Sword </h2>
            </div>
            <div className="flex justify-center items-center">
              <img src={sword} alt="sword-image" className="w-[50%] h-[225px]" />
              <p className="pr-[5px]"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae fuga veniam harum velit odio neque quasi cum illum voluptates? Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <p>card 2</p>
          <p>card 3</p>
        </div>

      </section>
    </div>
    

  )
}