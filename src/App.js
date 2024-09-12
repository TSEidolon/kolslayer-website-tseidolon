import { useRef } from "react";
import { NavBarTest } from "./components/navBarOne.jsx";
import  GameInfo  from "./components/gameInfo.jsx";
// import { GameInfoTest } from "./components/gameInfoTest.jsx";
// import { TestComponent } from "./components/parallaxTest.jsx";
// import { WeaponsInfoTest } from "./components/weaponsInfoTest.jsx";
import { NavBarOneTest } from "./components/navBarOneTest.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import  WeaponsInfo  from "./components/weaponsInfo.jsx";
import {MediaInfo} from "./components/mediaInfo.jsx"
import { SignUp } from "./components/signUpInfo.jsx";


// 
// !! Check if adjusting scroll speed is a thing !!
// 

function App() {
  // const gameRef = useRef(0);
  // const weaponsRef = useRef(1);


  const gameRef = useRef(null);
  const weaponsRef = useRef(null);
 

 
  return (
    <div>
      
      <ParallaxProvider >
        <NavBarOneTest navScrollOne={gameRef} navScrollTwo={weaponsRef}  />
        <NavBarTest />
        <GameInfo ref={gameRef} />
        <WeaponsInfo  ref={weaponsRef}/>
        <MediaInfo />
        <SignUp />
      </ParallaxProvider> 
      
    </div>

  );
}

export default App;
