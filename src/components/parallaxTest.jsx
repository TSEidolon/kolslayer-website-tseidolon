import { Parallax } from 'react-scroll-parallax';
// import { GameInfo } from './gameInfo'
import pineTree from '../assets/pine-tree.png'


export function TestComponent() {
  return (

<div>


      <div className="">
        <Parallax speed={10}>
          <div className=" bg-game-info-background2 bg-no-repeat">
            <div className="bg-game-pattern-one relative h-[400px] w-[400px]  bg-cover bg-no-repeat border-2 rotate-45 ">
            <Parallax speed={30}>
            <img src={pineTree} alt="Pine Tree" className='rotate-[-45deg] h-[400px] w-[400px]' />
            </Parallax>
            </div>
          </div>
        </Parallax>
        <Parallax speed={50}>
        <img src={pineTree} alt="Pine Tree" className=' h-[400px] w-[400px]' />
        <p>
            The parallax effect refers to the apparent displacement or
            difference in the position of an object when viewed from 
            different angles. This effect is often observed in everyday 
            life, such as when you view objects from different positions 
            with your eyes or when you move your head.
          </p>

        </Parallax>

        
      </div>
      
   
</div>
  )
}

