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
  const gameRef = useRef (0);
  const weaponsRef = useRef (1);
  const mediaRef = useRef (2);


  return (
    <div>
      
      <ParallaxProvider >
        <NavBarOneTest navScrollOne={weaponsRef} navScrollTwo={gameRef}  />
        <NavBarTest />
        <GameInfo ref={gameRef} />
        <WeaponsInfo  ref={weaponsRef}/>
        <MediaInfo ref={mediaRef}/>
        <SignUp />
      </ParallaxProvider> 
      
    </div>

  );
}

export default App;
