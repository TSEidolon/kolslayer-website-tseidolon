import image1 from "../assets/background.jpg"
import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
import image3 from "../assets/greg-rosenke-kr67X9ralR0-unsplash.jpg"
import image4 from "../assets/heather-shevlin-3B_NrzTjajc-unsplash.jpg"
// import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
// import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
// import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
// import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"

// 

export function MediaInfo (){
  return (
    <div className="h-screen flex items-start flex-col overflow-x-hidden overflow-y-hidden  text-white bg-[#3183C5]">
      <div className='relative'>
        <h1 className=" py-5 px-[100px] text-2xl weapons-info-top"> Weapons Info </h1>
      </div>
    <div className="h-full w-full flex justify-center items-start">
      <section className="w-full max-w-6xl p-5 pb-10 mx-auto mb-10 gap-3 columns-3 space-y-3">
        <img src={image1} alt="" className="rounded"/>
        <img src={image2} alt="" className="rounded"/>
        <img src={image3} alt="" className="rounded"/>
        <img src={image4} alt="" className="rounded"/>
        <img src={image1} alt="" className="rounded"/>
        <img src={image3} alt="" className="rounded"/>
        <img src={image4} alt="" className="rounded"/>
      </section>
    </div>
    </div>
  )
}