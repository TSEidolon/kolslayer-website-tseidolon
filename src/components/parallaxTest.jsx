import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { GameInfo } from './gameInfo'
// https://www.youtube.com/watch?v=jeSPvDI-IJw&list=PLkY85cDHOEpuxnzOBj2Cl5UEIFfKVBQq7&index=3

export function TestComponent() {
  return (
    <Parallax pages={2} style={{ }} class="animation parallax-remove-scrollbar">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="foreground"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <GameInfo />
        </ParallaxLayer>
    </Parallax>
  )
}

