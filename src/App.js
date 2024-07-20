
import { NavBarTest } from "./components/navBarOne.jsx";
import { GameInfo } from "./components/gameInfo.jsx";
// import { GameInfoTest } from "./components/gameInfoTest.jsx";
// import { TestComponent } from "./components/parallaxTest.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { WeaponsInfo } from "./components/weaponsInfo.jsx";


function App() {
  return (
    <div>
      
      <ParallaxProvider >
        <NavBarTest />
        <GameInfo />
        <WeaponsInfo />
      </ParallaxProvider> 
      
    </div>

  );
}

export default App;
