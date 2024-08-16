import React from "react"
// import { Parallax } from "react-scroll-parallax"

export function SignUp () {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-white bg-[#3183C5]">
      <section>
        <h1> Learn More </h1>
          <form className="w-[400px] mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
              </div>
              <input type="text" id="email-address-icon" className="bg-[#315A83] border border-[#315A83]  text-lg rounded-lg focus:outline-none focus:border-white focus:ring-sky-500 block w-full  ps-10 p-2.5 " placeholder="Enter Your Email"/>
            </div>
          </form>
        <button> Button area </button>
      </section>
      <section>
        <div>
          <p>Icons</p>
        </div>
        <div>
          <button>Buy Now</button>
        </div>
      </section>
    </div>
  )
}