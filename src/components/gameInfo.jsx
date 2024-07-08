

export function GameInfo () {
  return(
    <div className="h-screen flex justify-center items-start flex-col">
      <h1 className="border-2 py-5 px-[100px] text-2xl"> Game Info </h1>
      <div className="h-full flex">
        <section className="flex justify-center items-center gap-10 border-2 w-[50vw]">
          <div className="border-2  text-xl flex justify-center items-center flex-col min-w-[20%]">
            <p> Title 1 </p>
            <p> Title 2 </p>
            <p> Title 3 </p>
            <p> Title 4 </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-2xl"> Title of Paragraph </h2>
            <p className="text-lg"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tempora repellat odit possimus fugit modi doloremque, facere commodi illo quod quia quibusdam quos dolore sit qui animi suscipit impedit quis rem. Dolor deserunt velit similique aliquid. Vero a nobis voluptatum!</p>
          </div>
        </section>
        <section className="p-10">
          <div className="bg-game-pattern-one h-[250px] w-[250px]  bg-cover bg-no-repeat border-2 rotate-45">

          </div>
        </section>
      </div>
    </div>
  )
}