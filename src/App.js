
import { NavBarTest } from "./components/navBarOne.jsx";
import { GameInfo } from "./components/gameInfo.jsx";
// import { GameInfoTest } from "./components/gameInfoTest.jsx";
// import { TestComponent } from "./components/parallaxTest.jsx";
import { ParallaxProvider } from "react-scroll-parallax";


function App() {
  return (
    <div>
      <NavBarTest />
      <ParallaxProvider>
        <GameInfo />
      </ParallaxProvider> 
      
    </div>

  );
}

export default App;
