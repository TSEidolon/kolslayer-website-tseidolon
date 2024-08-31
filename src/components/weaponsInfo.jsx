import React from "react"
import sword from "../assets/sword-id-6331871.png"
import axe from "../assets/axe.png"
import mace from "../assets/mace.png"

import { Parallax } from "react-scroll-parallax"



// const todo = {["background"],["fix useState for cards"]}
export function WeaponsInfo () {
  const [weaponsInfoOpen, setweaponsInfoOpen] = React.useState(1);
  const handleCards = (e) => {
    setweaponsInfoOpen(e)
  }
  function checkClick() {
    console.log (weaponsInfoOpen)
  }


 
  return (

    <div className="min-h-screen flex items-start flex-col gap-[100px] overflow-x-hidden overflow-y-hidden  text-white bg-[#3183C5]">
      <div className='relative'>
        <h1 className=" py-5 px-[100px] text-2xl weapons-info-top"> Weapons Info </h1>
        
      </div>
      <Parallax speed={-2}  className="w-full h-full flex justify-center items-center">
      <section className={"w-full h-full  bg-contain bg-no-repeat  " + (
        weaponsInfoOpen===1 ? "bg-sword-background bg-left bg-[length:300px_400px] max-lg:bg-none ": 
        weaponsInfoOpen===2 ? "bg-axe-background bg-left max-lg:bg-none bg-[length:300px_340px] " :  
        "bg-mace-background bg-left max-lg:bg-none bg-[length:300px_340px] "
      )}>
        <div className=" w-full h-full flex flex-wrap flex-col lg:flex-row justify-center items-center gap-[5rem] z-20 relative py-10 px-20">
          <div className=" h-[440px] w-[290px] border-white border-2 flex justify-center items-center flex-col rounded-xl bg-black bg-opacity-40 pt-2" onClick={() => {handleCards(1);checkClick()}}>
            <div className="">
              <h2 className="text-3xl pb-2"> Sword </h2>
            </div>
            <div className="flex justify-stretch items-center  h-[70%] ">
              <img src={sword} alt="sword-image" className="w-[35%] h-[225px] object-contain" />
              <p className=" text-lg 2 text-center h-full flex items-center pr-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
          <div className=" h-[440px] w-[290px] border-white border-2 flex justify-center items-center flex-col rounded-xl bg-black bg-opacity-40 pt-2" onClick={() => {handleCards(2);checkClick()}}>
            <div className="">
              <h2 className="text-3xl pb-2"> Sword </h2>
            </div>
            <div className="flex justify-stretch items-center pl-[10px] h-[70%] ">
              <img src={axe} alt="axe-image" className="w-[40%] h-[300px] object-contain " />
              <p className=" text-lg 2 text-center h-full flex items-center pr-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
          <div className=" h-[440px] w-[290px] border-white border-2 flex justify-center items-center flex-col rounded-xl bg-black bg-opacity-40 pt-2" onClick={() => {handleCards(3);checkClick()}}>
            <div className="">
              <h2 className="text-3xl pb-2"> Sword </h2>
            </div>
            <div className="flex justify-stretch items-center  h-[70%] ">
              <img src={mace} alt="sword-image" className="w-[35%] h-[225px] object-contain" />
              <p className=" text-lg 2 text-center h-full flex items-center pr-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
        </div>

        <svg  width="200" height="200" viewBox="0 0 526 526" fill="none" xmlns="http://www.w3.org/2000/svg" className={"absolute top-[12%] z-10  lg:top-[0px] lg:right-[-330px] right-[-110px] weapons-wheel lg:w-[640px] lg:h-[640px] " }>
<g filter="url(#filter0_d_71_5)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M223.468 1.67994C221.853 3.18347 221.578 4.37006 221.578 9.80817C221.578 32.3638 232.761 53.5894 248.638 61.1676C251.701 62.6296 254.78 63.8257 255.481 63.8257C256.769 63.8257 258.234 69.4063 257.33 70.8693C257.083 71.27 249.714 71.5982 240.956 71.5982C226.183 71.5982 224.907 71.7234 223.305 73.3254C220.895 75.7357 221.118 78.8844 223.853 81.0348C225.969 82.6989 227.249 82.825 242.095 82.825H258.061L257.521 85.5238C257.224 87.0083 256.982 89.1457 256.982 90.2736V92.3246H241.007C226.183 92.3246 224.907 92.449 223.305 94.0519C221.068 96.2886 221.105 99.401 223.393 101.475C225.019 102.948 226.915 103.147 241.57 103.388L257.932 103.657L257.673 108.138L257.414 112.619L240.719 113.051C225.47 113.446 223.92 113.628 222.801 115.159C221.057 117.549 221.288 120.293 223.393 122.201C225.014 123.67 226.908 123.875 241.095 124.116L256.982 124.385L257.133 131.456C257.571 152.007 257.634 185.833 257.243 190.494L256.794 195.825L250.196 197.281C241.856 199.12 234.634 202.114 228.171 206.409C225.387 208.26 222.863 209.775 222.564 209.775C222.265 209.775 210.659 198.417 196.773 184.536L171.527 159.297L183.247 147.467C195.709 134.89 196.049 134.247 192.414 130.107C189.504 126.794 187.27 128.08 175.235 139.998L163.721 151.399L160.351 148.108L156.982 144.817L168.11 133.543C174.231 127.341 179.481 121.508 179.775 120.578C180.525 118.216 177.482 114.411 174.568 114.066C172.538 113.825 170.548 115.421 160.608 125.265L149.016 136.744L145.82 133.548L142.623 130.352L153.496 119.326C159.477 113.263 164.635 107.441 164.958 106.391C166.106 102.653 162.03 98.5763 158.292 99.7249C157.242 100.048 151.422 105.204 145.361 111.185L134.339 122.057L132.074 119.791L129.809 117.525L131.566 114.64C136.175 107.077 137.534 94.494 134.837 84.3303C132.319 74.8375 125.374 63.1176 116.932 54.1102C111.839 48.6772 108.359 47.6401 105.569 50.724C102.838 53.7423 103.781 56.5196 109.748 63.0217C119.541 73.6941 124.967 85.2025 125.026 95.425C125.056 100.633 123.727 106.577 122.152 108.275C121.669 108.796 115.091 102.867 104.77 92.607C95.6367 83.528 87.2762 75.6485 86.189 75.0966C82.2842 73.1138 77.5944 76.6796 78.6272 80.8474C79.008 82.3863 85.341 89.4074 96.1505 100.277L113.078 117.297L110.551 118.342C109.162 118.917 105.023 119.557 101.354 119.764C89.7562 120.419 78.388 115.638 66.5466 105.127C60.4269 99.6938 57.2483 98.774 54.6215 101.677C51.9843 104.59 52.8168 107.795 57.2941 111.961C67.3307 121.302 79.9371 128.365 90.137 130.361C98.444 131.987 109.427 131.039 116.071 128.123L121.527 125.729L123.811 128.015L126.097 130.3L115.226 141.323C109.247 147.385 104.091 153.205 103.768 154.255C102.619 157.993 106.696 162.07 110.433 160.922C111.483 160.599 117.304 155.44 123.367 149.459L134.391 138.584L137.587 141.782L140.783 144.978L129.305 156.571C119.462 166.513 117.866 168.502 118.107 170.533C118.482 173.692 122.245 176.49 124.976 175.64C126.102 175.289 131.764 170.197 137.558 164.322C143.351 158.447 148.424 153.641 148.829 153.641C149.235 153.641 150.887 155.002 152.499 156.666L155.431 159.691L144.033 171.203C132.119 183.236 130.834 185.47 134.147 188.381C138.286 192.016 138.929 191.676 151.505 179.213L163.334 167.491L188.57 192.74C202.45 206.628 213.806 218.305 213.806 218.69C213.806 219.075 212.86 220.63 211.703 222.148C206.851 228.509 201.977 240.769 200.45 250.451L199.96 253.56L164.189 253.474L128.419 253.387L128.152 237.282C127.915 222.879 127.713 220.987 126.241 219.362C124.168 217.074 121.056 217.038 118.819 219.274C117.217 220.877 117.092 222.153 117.092 236.978V252.955H112.397H107.701L107.431 237.066C107.191 222.878 106.986 220.983 105.517 219.362C103.61 217.257 100.865 217.026 98.4759 218.771C96.9449 219.889 96.7627 221.44 96.3681 236.691L95.9363 253.387L91.4029 253.648L86.8694 253.909V238.003C86.8694 223.22 86.7434 221.938 85.0794 219.823C82.9292 217.088 79.7809 216.864 77.3708 219.274C75.769 220.876 75.6438 222.153 75.6438 236.877C75.6438 252.662 75.6325 252.755 73.7008 253.103C70.0482 253.762 68.7969 252.938 67.8108 249.224C66.2055 243.185 62.6168 237.539 57.1076 232.385C47.5821 223.474 34.5595 218.655 17.7183 217.809C8.04439 217.323 7.65667 217.372 5.84502 219.317C3.44013 221.899 3.4738 224.036 5.95899 226.522C7.69466 228.258 9.08319 228.572 16.9688 229.015C35.1898 230.038 48.5683 236.224 54.4255 246.335C58.7491 253.799 60.3699 253.282 32.095 253.444C7.32507 253.584 7.09969 253.602 5.54191 255.525C2.01877 259.877 4.70517 263.683 11.8456 264.459C14.4016 264.737 25.5314 264.858 36.5784 264.728C56.5428 264.493 56.6611 264.502 56.1249 266.279C54.5524 271.495 48.0752 278.481 41.0488 282.543C34.923 286.083 25.9304 288.451 16.5345 288.997C9.0996 289.429 7.67308 289.764 5.95641 291.481C3.47294 293.965 3.44012 296.102 5.84587 298.684C7.64544 300.616 8.08497 300.677 16.8557 300.197C41.4823 298.849 60.7352 286.996 66.9335 269.363C68.5647 264.724 68.6804 264.614 71.9073 264.614H75.212L75.6438 281.31C76.0384 296.56 76.2206 298.111 77.7516 299.229C80.3093 301.097 83.0985 300.697 85.0794 298.178C86.7391 296.069 86.8694 294.775 86.8694 280.474V265.045H91.6188H96.3681V281.022C96.3681 295.848 96.4924 297.123 98.0951 298.726C100.332 300.963 103.444 300.926 105.517 298.638C106.99 297.012 107.19 295.115 107.431 280.459L107.699 264.095L112.18 264.355L116.661 264.614L116.878 281.022C117.084 296.519 117.197 297.514 118.917 298.942C121.358 300.968 124.238 300.849 126.241 298.638C127.698 297.031 127.936 294.98 128.318 280.718L128.75 264.614H164.319H199.887L200.843 270.099C202.514 279.692 209.151 294.356 213.428 297.907C214.61 298.887 211.476 302.342 189.059 324.771L163.334 350.509L151.505 338.788C138.929 326.324 138.286 325.985 134.147 329.62C130.834 332.53 132.119 334.764 144.033 346.798L155.431 358.309L152.499 361.335C150.887 362.999 149.352 364.356 149.089 364.353C148.826 364.349 144.073 359.921 138.527 354.514C124.29 340.633 123.766 340.335 120.076 344.026C116.374 347.728 117.112 349.115 129.37 361.495L140.783 373.023L137.587 376.219L134.391 379.416L123.367 368.541C117.304 362.56 111.483 357.402 110.433 357.079C106.696 355.93 102.619 360.007 103.768 363.745C104.091 364.795 109.247 370.616 115.226 376.677L126.097 387.7L123.931 389.867L121.764 392.034L116.495 389.401C107.141 384.726 94.5711 384.579 82.8083 389.007C75.9037 391.607 64.7082 398.908 58.1576 405.084C52.7261 410.205 51.6907 413.686 54.7717 416.474C57.8156 419.229 60.5046 418.262 67.6252 411.848C74.5497 405.611 84.3756 399.846 91.168 398.035C98.1789 396.166 109.359 397.147 112.317 399.889C112.838 400.372 106.909 406.951 96.6505 417.273C87.5723 426.407 79.6936 434.769 79.1418 435.856C77.1592 439.761 80.7247 444.451 84.892 443.418C86.4308 443.038 93.4512 436.704 104.319 425.893L121.337 408.964L122.382 411.491C122.957 412.881 123.597 417.02 123.805 420.689C124.46 432.288 119.68 443.658 109.169 455.5C103.736 461.621 102.817 464.799 105.719 467.427C108.638 470.068 111.871 469.232 116.054 464.754C125.203 454.957 132.226 442.365 134.36 431.93C136.067 423.579 135.14 412.51 132.179 405.912L129.761 400.523L132.05 398.234L134.339 395.944L145.361 406.815C151.422 412.796 157.242 417.952 158.292 418.275C162.03 419.424 166.106 415.347 164.958 411.609C164.635 410.559 159.477 404.738 153.496 398.674L142.623 387.649L145.82 384.452L149.016 381.256L160.542 392.67C166.882 398.949 172.743 404.086 173.565 404.086C178.08 404.086 180.956 399.506 178.883 395.617C178.202 394.337 173.151 388.852 167.661 383.427C162.17 378.003 157.678 373.319 157.678 373.018C157.678 372.717 159.039 371.151 160.703 369.539L163.727 366.607L175.238 378.006C187.27 389.921 189.504 391.207 192.414 387.893C196.049 383.754 195.709 383.11 183.247 370.533L171.527 358.703L196.773 333.464C210.659 319.583 222.265 308.226 222.564 308.226C222.863 308.226 225.387 309.74 228.171 311.591C236.002 316.796 244.402 319.991 254.391 321.565L257.414 322.041L257.486 357.831L257.559 393.62L241.384 393.887C226.911 394.126 225.017 394.327 223.393 395.799C221.24 397.75 221.068 400.383 222.922 403.029C224.23 404.898 224.699 404.949 240.624 404.949H256.982V409.645V414.342L241.095 414.611C226.908 414.852 225.014 415.057 223.393 416.526C221.105 418.599 221.068 421.712 223.305 423.948C224.907 425.55 226.183 425.676 240.956 425.676C251.344 425.676 257.079 425.997 257.452 426.601C257.766 427.109 257.765 429.247 257.45 431.35L256.876 435.175H241.502C227.256 435.175 225.961 435.307 223.853 436.966C221.118 439.116 220.895 442.265 223.305 444.675C224.907 446.278 226.183 446.402 240.968 446.402H256.903L257.478 449.465C257.794 451.149 257.812 452.768 257.52 453.061C257.227 453.354 255.003 454.292 252.578 455.146C243.15 458.467 234.707 466.142 229.052 476.534C225.356 483.327 222.385 495.122 221.834 505.196C221.354 513.968 221.415 514.408 223.346 516.207C225.928 518.613 228.065 518.58 230.549 516.097C232.265 514.38 232.6 512.953 233.033 505.518C233.579 496.121 235.947 487.127 239.486 481.001C243.527 474.008 250.537 467.491 255.687 465.942C257.385 465.432 257.414 465.832 257.445 490.127L257.477 514.832L259.484 516.456C262.016 518.507 264.028 518.514 266.538 516.481C268.507 514.887 268.516 514.782 268.701 489.925C268.911 461.753 268.396 463.396 275.691 467.623C285.714 473.43 291.991 486.968 293.002 504.955C293.393 511.907 293.866 514.313 295.166 515.966C297.222 518.58 300.062 518.672 302.706 516.208C304.65 514.396 304.7 514.009 304.213 504.334C302.905 478.289 290.455 458.701 272.309 454.137C268.084 453.075 267.666 452.396 268.752 448.345C269.268 446.419 269.415 446.402 285.147 446.402C299.87 446.402 301.146 446.277 302.748 444.675C305.158 442.265 304.934 439.116 302.2 436.966C300.092 435.307 298.796 435.175 284.59 435.175C267.759 435.175 268.426 435.408 268.56 429.562L268.639 426.107L285.334 425.676C300.582 425.281 302.133 425.099 303.252 423.568C304.996 421.178 304.765 418.433 302.66 416.526C301.039 415.058 299.146 414.852 285.041 414.612L269.237 414.343L268.933 410.525C268.766 408.425 268.761 406.311 268.922 405.827C269.106 405.275 275.102 404.949 285.118 404.949C299.87 404.949 301.146 404.824 302.748 403.222C304.985 400.985 304.948 397.873 302.66 395.799C301.036 394.327 299.142 394.126 284.67 393.887L268.495 393.62L268.568 357.831L268.639 322.041L271.662 321.58C281.158 320.135 293.444 315.235 299.875 310.329C301.392 309.172 302.948 308.226 303.333 308.226C303.718 308.226 315.393 319.583 329.28 333.464L354.526 358.703L342.806 370.533C330.343 383.11 330.004 383.754 333.639 387.893C336.549 391.208 338.783 389.922 350.831 377.989L362.357 366.575L365.525 369.742L368.692 372.909L364.431 377.467C362.089 379.973 357.396 384.671 354.002 387.908C350.608 391.144 347.345 394.967 346.75 396.403C345.803 398.689 345.883 399.302 347.393 401.334C348.366 402.642 350.149 403.776 351.485 403.934C353.515 404.175 355.504 402.579 365.445 392.735L377.037 381.256L380.233 384.452L383.43 387.649L372.556 398.674C366.576 404.738 361.418 410.559 361.095 411.609C359.946 415.347 364.023 419.424 367.76 418.275C368.81 417.952 374.63 412.796 380.691 406.815L391.713 395.944L394.003 398.234L396.292 400.523L393.874 405.912C390.913 412.51 389.985 423.579 391.693 431.93C393.83 442.381 400.755 454.765 410.05 464.754C414.277 469.296 417.87 470.165 420.484 467.276C423.109 464.375 422.241 461.536 416.884 455.5C406.373 443.658 401.593 432.288 402.248 420.689C402.455 417.02 403.095 412.881 403.67 411.491L404.715 408.964L421.733 425.893C432.602 436.704 439.622 443.038 441.161 443.418C445.328 444.451 448.894 439.761 446.911 435.856C446.359 434.769 438.48 426.407 429.402 417.273C419.144 406.951 413.215 400.372 413.736 399.889C416.694 397.147 427.874 396.166 434.885 398.035C441.788 399.875 451.767 405.727 458.555 411.915C465.603 418.342 468.659 419.388 471.431 416.324C474.233 413.229 473.263 410.145 467.895 405.084C461.345 398.908 450.149 391.607 443.244 389.007C431.482 384.579 418.912 384.726 409.558 389.401L404.289 392.034L402.122 389.867L399.956 387.7L410.826 376.677C416.806 370.616 421.962 364.795 422.285 363.745C423.434 360.007 419.357 355.93 415.62 357.079C414.57 357.402 408.749 362.56 402.686 368.541L391.662 379.416L388.466 376.219L385.27 373.023L396.683 361.495C408.94 349.115 409.679 347.728 405.977 344.026C402.32 340.368 401.81 340.652 388.111 353.967C382.243 359.67 377.227 364.342 376.964 364.349C376.701 364.355 375.166 362.999 373.554 361.335L370.622 358.309L382.02 346.798C393.934 334.764 395.219 332.53 391.906 329.62C387.767 325.985 387.124 326.324 374.548 338.788L362.719 350.509L337.483 325.26C323.603 311.373 312.247 299.717 312.247 299.358C312.247 299 313.761 296.476 315.613 293.751C319.885 287.46 323.283 279.351 324.902 271.591C325.598 268.249 326.325 265.358 326.519 265.165C326.712 264.972 342.718 264.769 362.086 264.714L397.303 264.614L397.735 280.718C398.117 294.98 398.355 297.031 399.811 298.638C401.719 300.743 404.463 300.974 406.853 299.229C408.384 298.111 408.566 296.56 408.96 281.31L409.392 264.614L413.873 264.355L418.354 264.095L418.622 280.459C418.863 295.115 419.063 297.012 420.536 298.638C422.609 300.926 425.721 300.963 427.958 298.726C429.56 297.123 429.685 295.848 429.685 281.022V265.045H434.434H439.183V280.474C439.183 294.775 439.314 296.069 440.973 298.178C442.954 300.697 445.744 301.097 448.301 299.229C449.832 298.111 450.014 296.56 450.409 281.31L450.841 264.614H454.146C457.372 264.614 457.488 264.724 459.119 269.363C465.318 286.996 484.571 298.849 509.197 300.197C517.968 300.677 518.407 300.616 520.207 298.684C522.494 296.229 522.576 294.347 520.504 291.789C519.133 290.095 517.753 289.75 509.917 289.138C500.012 288.364 490.909 285.955 485.004 282.543C477.995 278.492 471.499 271.493 469.937 266.31C469.413 264.57 469.659 264.552 494.093 264.582L518.779 264.614L520.43 262.575C522.498 260.021 522.521 258.008 520.511 255.525C518.953 253.602 518.728 253.584 493.958 253.444C465.683 253.282 467.304 253.799 471.627 246.335C477.492 236.212 490.305 230.303 509.486 228.879C517.775 228.263 519.103 227.942 520.496 226.221C522.574 223.655 522.497 221.774 520.214 219.323C518.419 217.396 517.976 217.337 508.772 217.792C482.692 219.079 462.998 231.33 458.242 249.224C457.256 252.938 456.005 253.762 452.352 253.103C450.42 252.755 450.409 252.662 450.409 236.877C450.409 222.153 450.284 220.876 448.682 219.274C446.272 216.864 443.124 217.088 440.973 219.823C439.309 221.938 439.183 223.22 439.183 238.003V253.909L434.65 253.648L430.116 253.387L429.685 236.691C429.29 221.44 429.108 219.889 427.577 218.771C425.188 217.026 422.443 217.257 420.536 219.362C419.079 220.97 418.842 223.021 418.459 237.282C418.066 251.934 417.891 253.377 416.516 253.279C415.685 253.219 413.645 253.122 411.983 253.063L408.96 252.955V236.978C408.96 222.153 408.836 220.877 407.233 219.274C404.997 217.038 401.885 217.074 399.811 219.362C398.34 220.987 398.138 222.879 397.9 237.282L397.634 253.387L361.863 253.474L326.093 253.56L325.603 250.451C324.076 240.769 319.201 228.509 314.35 222.148C313.193 220.63 312.247 219.075 312.247 218.69C312.247 218.305 323.603 206.628 337.483 192.74L362.719 167.491L374.548 179.213C387.124 191.676 387.767 192.016 391.906 188.381C395.219 185.47 393.934 183.236 382.02 171.203L370.622 159.691L373.554 156.666C375.166 155.002 376.834 153.641 377.26 153.641C377.686 153.641 382.798 158.454 388.621 164.337C394.444 170.22 400.089 175.314 401.165 175.656C403.803 176.492 407.577 173.641 407.946 170.533C408.187 168.502 406.591 166.513 396.748 156.571L385.27 144.978L388.466 141.782L391.662 138.584L402.686 149.459C408.749 155.44 414.57 160.599 415.62 160.922C419.357 162.07 423.434 157.993 422.285 154.255C421.962 153.205 416.806 147.385 410.826 141.323L399.956 130.3L402.241 128.015L404.526 125.729L409.982 128.123C416.626 131.039 427.609 131.987 435.916 130.361C446.116 128.365 458.722 121.302 468.759 111.961C473.301 107.734 474.17 104.14 471.281 101.526C468.381 98.901 465.541 99.7689 459.506 105.127C447.665 115.638 436.297 120.419 424.699 119.764C421.03 119.557 416.891 118.917 415.501 118.342L412.975 117.297L429.902 100.277C440.712 89.4074 447.045 82.3863 447.426 80.8474C448.458 76.6796 443.769 73.1138 439.864 75.0966C438.777 75.6485 430.416 83.528 421.283 92.607C410.962 102.867 404.384 108.796 403.901 108.275C402.386 106.641 401.016 100.774 401.016 95.9172C401.016 84.623 406.178 74.0145 417.763 61.5026C420.74 58.2874 421.913 56.3106 421.913 54.5118C421.913 51.3976 419.543 49.1445 416.266 49.1445C411.823 49.1445 400.815 62.4379 394.713 75.1726C390.858 83.2154 389.694 89.1906 390.118 98.7516C390.415 105.44 390.87 107.382 393.256 112.149L396.046 117.723L393.88 119.89L391.713 122.057L380.691 111.185C374.63 105.204 368.81 100.048 367.76 99.7249C364.023 98.5763 359.946 102.653 361.095 106.391C361.418 107.441 366.576 113.263 372.556 119.326L383.43 130.352L380.233 133.548L377.037 136.744L365.445 125.265C355.504 115.421 353.515 113.825 351.485 114.066C348.624 114.405 345.527 118.22 346.259 120.504C346.543 121.392 351.635 127.072 357.575 133.126C363.515 139.179 368.375 144.447 368.375 144.831C368.375 145.215 367.014 146.849 365.35 148.461L362.325 151.393L350.815 139.995C338.783 128.08 336.549 126.794 333.639 130.107C330.004 134.247 330.343 134.89 342.806 147.467L354.526 159.297L329.28 184.536C315.393 198.417 303.783 209.775 303.477 209.775C303.171 209.775 300.842 208.371 298.301 206.655C290.845 201.62 281.261 197.88 272.077 196.423L268.606 195.872L268.685 167.2C268.729 151.43 268.834 135.345 268.917 131.456L269.071 124.385L284.958 124.116C299.145 123.875 301.039 123.67 302.66 122.201C304.765 120.293 304.996 117.549 303.252 115.159C302.133 113.628 300.582 113.446 285.334 113.051L268.639 112.619L268.38 108.138L268.121 103.657L284.483 103.388C299.138 103.147 301.034 102.948 302.66 101.475C304.948 99.401 304.985 96.2886 302.748 94.0519C301.145 92.449 299.87 92.3246 285.046 92.3246C270.42 92.3246 269.068 92.1968 269.038 90.8133C269.02 89.9817 268.795 87.8451 268.536 86.0635L268.067 82.825H283.996C298.803 82.825 300.085 82.6989 302.2 81.0348C304.719 79.0537 305.119 76.2642 303.252 73.7062C302.133 72.175 300.582 71.9928 285.334 71.5982L268.639 71.1664L268.703 68.1601C268.764 65.2783 268.978 65.0814 273.908 63.3836C280.98 60.9482 284.575 58.5603 289.946 52.7275C298.594 43.3384 303.381 30.2315 304.213 13.6668C304.7 3.9918 304.65 3.60404 302.706 1.7922C300.124 -0.612933 297.987 -0.579252 295.501 1.9062C293.766 3.64204 293.451 5.03072 293.008 12.9171C292.209 27.1623 288.616 37.5635 281.833 45.2703C278.695 48.8353 270.174 53.9893 269.134 52.9504C268.862 52.6775 268.612 41.3556 268.579 27.7884C268.518 3.15583 268.516 3.12043 266.54 1.52103C264.03 -0.511891 262.017 -0.507573 259.493 1.53744C257.496 3.15411 257.494 3.17052 257.382 27.2297C257.322 40.4704 257.206 51.5746 257.127 51.9063C256.806 53.2423 251.547 50.4753 247.512 46.8481C238.891 39.0956 234.113 27.7357 232.891 12.0838C232.28 4.24743 231.935 2.86739 230.241 1.49599C227.716 -0.54989 225.805 -0.49721 223.468 1.67994ZM257.414 226.46V245.151L244.242 232.005C236.998 224.775 231.201 218.47 231.358 217.997C232.249 215.323 253.053 206.701 256.55 207.555C257.092 207.688 257.414 214.714 257.414 226.46ZM278.138 209.411C282.835 210.731 294.249 216.662 294.702 218.018C294.856 218.48 289.054 224.776 281.81 232.008L268.639 245.158L268.452 226.906C268.349 216.868 268.47 208.322 268.72 207.915C269.203 207.136 271.121 207.44 278.138 209.411ZM235.826 240.001C242.938 247.126 248.568 252.973 248.335 252.996C242.249 253.581 226.796 253.776 220.105 253.352L211.291 252.793L211.794 250.068C213.203 242.425 220.221 227.047 222.299 227.047C222.626 227.047 228.714 232.876 235.826 240.001ZM307.01 231.536C309.876 235.916 313.275 244.594 314.267 250.068L314.762 252.793L305.948 253.365C301.101 253.679 293.249 253.72 288.5 253.457C283.751 253.193 279.287 252.973 278.581 252.966C277.874 252.96 283.115 247.126 290.227 240.001C297.339 232.876 303.364 227.047 303.615 227.047C303.865 227.047 305.393 229.067 307.01 231.536ZM236.123 277.702C228.844 284.994 222.501 290.829 222.028 290.672C220.363 290.117 213.848 276.642 212.588 271.145C211.886 268.088 211.449 265.367 211.614 265.1C211.779 264.832 220.339 264.576 230.636 264.53L249.357 264.447L236.123 277.702ZM314.349 265.133C314.57 265.354 314.175 268.048 313.471 271.12C312.205 276.637 305.694 290.115 304.025 290.672C303.552 290.829 297.206 284.99 289.923 277.696L276.683 264.433L295.314 264.582C305.561 264.663 314.127 264.911 314.349 265.133ZM257.492 293.323L257.053 310.373L254.211 310.087C249.687 309.631 242.02 306.785 236.329 303.45C233.441 301.756 231.076 300.102 231.076 299.774C231.076 299.447 236.796 293.448 243.787 286.445C253.568 276.647 256.663 274.007 257.215 274.992C257.609 275.696 257.734 283.945 257.492 293.323ZM293.249 301.306C289.532 304.161 280.512 308.195 274.933 309.497C271.987 310.184 269.415 310.585 269.217 310.386C268.616 309.786 268.109 277.72 268.664 275.468C269.141 273.537 270.235 274.423 282.296 286.508L295.408 299.648L293.249 301.306Z" fill="#81abce"/>
</g>
<defs>
<filter id="filter0_d_71_5" x="0" y="0" width="526" height="526" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71_5"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71_5" result="shape"/>
</filter>
</defs>
        </svg>

        <svg width="150" height="150" viewBox="0 0 309 309" fill="none" xmlns="http://www.w3.org/2000/svg" className='z-10 absolute top-[-25%] right-[45%] max-lg:hidden "'>
<rect x="154.221" y="0.707107" width="217.102" height="217.102" transform="rotate(45 154.221 0.707107)" stroke="white"/>
<rect x="154.946" y="21.7556" width="186.938" height="186.938" transform="rotate(45 154.946 21.7556)" stroke="white"/>
<rect x="154.946" y="93.8991" width="135.925" height="135.925" transform="rotate(45 154.946 93.8991)" stroke="white"/>
<rect x="155.357" y="130.362" width="118.604" height="118.604" transform="rotate(45 155.357 130.362)" stroke="white"/>
        </svg>

      </section>
      </Parallax>
    </div>


  )
}