import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// https://www.youtube.com/watch?v=jeSPvDI-IJw&list=PLkY85cDHOEpuxnzOBj2Cl5UEIFfKVBQq7&index=3

export function TestComponent() {
  return (
    <Parallax pages={1} style={{ }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
    </Parallax>
  )
}

