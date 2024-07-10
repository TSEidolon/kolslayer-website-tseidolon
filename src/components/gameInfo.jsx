import pineTree from '../assets/pine-tree.png'

export function GameInfo () {
  return(
    <div className="h-screen flex justify-center items-start flex-col overflow-x-hidden">
      <h1 className="border-2 py-5 px-[100px] text-2xl"> Game Info </h1>
      <div className="h-full flex w-full">
        <section className="flex justify-center items-center gap-10 border-2 w-[60%] pl-10 h-[90%]">
          <div className="border-2  text-xl flex justify-center items-center flex-col min-w-[20%] h-full gap-10">
            <p className=" px-2 border-2 border-black w-full text-center
            relative  transition-all ease-in-out  after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-black after:origin-center after:h-full after:w-0 hover:after:w-[12%] after:right-[0%]"> Title 1 </p>
            <p className="border-2 border-black  w-full text-center"> Title 2 </p>
            <p className="border-2 border-black  w-full text-center"> Title 3 </p>
            <p className="border-2 border-black  w-full text-center"> Title 4 </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-10">
            <h2 className="text-2xl"> Title of Paragraph </h2>
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