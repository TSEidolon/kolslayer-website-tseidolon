import image1 from "../assets/background.jpg"
import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
import image3 from "../assets/greg-rosenke-kr67X9ralR0-unsplash.jpg"
import image4 from "../assets/heather-shevlin-3B_NrzTjajc-unsplash.jpg"
// import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
// import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
// import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
// import image2 from "../assets/giorgio-trovato-n4cjanwvGdg-unsplash.jpg"
import backgroundImage1 from "../assets/WeirdShapeAbbomination.png"

import { Parallax } from "react-scroll-parallax"

export function MediaInfo (){
  return (
    <div className="h-screen flex items-start flex-col overflow-x-hidden overflow-y-hidden   text-white bg-[#3183C5]">
      <div className='relative'>
        <h1 className=" py-5 px-[100px] text-2xl weapons-info-top"> Media Info </h1>
      </div>
    <div className="h-full w-full flex justify-center items-start z-20 relative">
      <section className="w-full max-w-6xl p-5 pb-10 mx-auto mb-10 gap-3 columns-3 space-y-3">
        <img src={image1} alt="" className="rounded"/>
        <img src={image2} alt="" className="rounded"/>
        <img src={image3} alt="" className="rounded"/>
        <img src={image4} alt="" className="rounded"/>
        <img src={image1} alt="" className="rounded"/>
        <img src={image3} alt="" className="rounded"/>
        <img src={image4} alt="" className="rounded"/>
      </section>
      {/* <img src={backgroundImage1} alt="" className="absolute -z-10 " /> */}
    <Parallax  speed={15} className="-z-10  absolute max-w-6xl">
      <img src={backgroundImage1} alt="" className="  top-[-10%] right-[50%] h-[800px]" />
    </Parallax>
    </div>
    </div>
  )
}