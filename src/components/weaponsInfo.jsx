import React from "react"


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
        <p>card 1</p>
        <p>card 2</p>
        <p>card 3</p>
      </section>
    </div>
    

  )
}