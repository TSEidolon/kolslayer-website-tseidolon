import React from "react"
import sword from "../assets/sword-id-6331871.png"


// const todo = {["cardsDesign"],["background"],["fix useState for cards"]}
export function WeaponsInfo () {
  // const [weaponsInfoOpen, setweaponsInfoOpen] = React.useState(1);
  // const handleTitle = (e) => {
  //   setweaponsInfoOpen(e)
  // }
  return (
    <div className="h-screen flex items-start flex-col overflow-x-hidden overflow-y-hidden text-white bg-[#3183C5]">
      <div className='relative'>
        <h1 className=" py-5 px-[100px] text-2xl weapons-info-top"> Weapons Info </h1>
      </div>
      <section className="w-full h-full ">
        <div className="h-[100%] w-full flex justify-center items-center gap-[10rem] ">
          <div className=" h-[440px] w-[290px] border-white border-2 flex justify-center items-center flex-col rounded-xl bg-black bg-opacity-20 pt-2">
            <div className="">
              <h2 className="text-3xl pb-2"> Sword </h2>
            </div>
            <div className="flex justify-stretch items-center  h-[70%] ">
              <img src={sword} alt="sword-image" className="w-[40%] h-[225px]" />
              <p className=" text-lg 2 text-center h-full flex items-center pr-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
          <div className=" h-[440px] w-[290px] border-white border-2 flex justify-center items-center flex-col rounded-xl bg-black bg-opacity-20 pt-2">
            <div className="">
              <h2 className="text-3xl pb-2"> Sword </h2>
            </div>
            <div className="flex justify-stretch items-center  h-[70%] ">
              <img src={sword} alt="sword-image" className="w-[40%] h-[225px]" />
              <p className=" text-lg 2 text-center h-full flex items-center pr-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
          <div className=" h-[440px] w-[290px] border-white border-2 flex justify-center items-center flex-col rounded-xl bg-black bg-opacity-20 pt-2">
            <div className="">
              <h2 className="text-3xl pb-2"> Sword </h2>
            </div>
            <div className="flex justify-stretch items-center  h-[70%] ">
              <img src={sword} alt="sword-image" className="w-[40%] h-[225px]" />
              <p className=" text-lg 2 text-center h-full flex items-center pr-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
        </div>

      </section>
    </div>
    

  )
}