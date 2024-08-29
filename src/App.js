
import { NavBarTest } from "./components/navBarOne.jsx";
import { GameInfo } from "./components/gameInfo.jsx";
// import { GameInfoTest } from "./components/gameInfoTest.jsx";
// import { TestComponent } from "./components/parallaxTest.jsx";
// import { WeaponsInfoTest } from "./components/weaponsInfoTest.jsx";
// import { NavBarOneTest } from "./components/navBarOneTest.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { WeaponsInfo } from "./components/weaponsInfo.jsx";
import {MediaInfo} from "./components/mediaInfo.jsx"
import { SignUp } from "./components/signUpInfo.jsx";


// 
// !! Check if adjusting scroll speed is a thing !!
// 

function App() {
  return (
    <div>
      
      <ParallaxProvider >
        <NavBarTest />
        <GameInfo />
        <WeaponsInfo />
        <MediaInfo />
        <SignUp />
      </ParallaxProvider> 
      
    </div>

  );
}

export default App;
