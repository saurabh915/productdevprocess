import logo from './logo.svg';
import './App.css';
import Productdevprocess from './Components/Productdevprocess'
import { Diamond, Arrow } from "react-awesome-shapes";
import { Polygon } from 'react-awesome-shapes/dist/shapes/polygon';
import { PolygonCard} from 'react-awesome-shapes/dist/shapes/polygonCard';
import { SquareDonut } from 'react-awesome-shapes/dist/shapes/squareDonut';
import Vertical from './Components/Vertical';
function App() {
  return (
    <div className="App" >
<div className='container'>
 

{/* <Diamond
className= "rotate"
       position= "relative"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "45px"
       left= "42px"
       top= "67px"
       z-index= "0"
      
/> */}

  <PolygonCard

  left= "-9px"
  position="relative"
  top="94px"
    height="20px"
    width="101px"
    zIndex={2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/>     
<div className='c1'>Kick-off</div>


<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "40px"
       top= "74px"
       z-index= "3"
/>
<PolygonCard
  position="relative"
  top="94px"
  left="32px"
    height="20px"
    width="101px"
    zIndex={-2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/>  
<div className='c2'>DRK</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "120px"
       top= "74px"
       z-index= "3"
/>
<PolygonCard
  position="relative"
  top="94px"
  left="64px"
    height="20px"
    width="84px"
    zIndex={2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/>  
<div className='c3'>DRII</div>
<Diamond

       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "200px"
       top= "74px"
       z-index= "3"
/>

<PolygonCard
  position="relative"
  top="94px"
  left="92px"
    height="20px"
    width="101px"
    zIndex={-2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/> 
<div className='c4'>MT</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "280px"
       top= "74px"
       z-index= "2"
/>
<PolygonCard
  position="relative"
  top="94px"
  left="130px"
    height="20px"
    width="88px"
    zIndex={2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/>  
<div className='c5'>DRI</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "360px"
       top= "74px"
       z-index= "2"
/>
<PolygonCard
  position="relative"
  top="94px"
  left="155px"
    height="20px"
    width="101px"
    zIndex={-2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/>  
<div className='c6'>FMT</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "439px"
       top= "74px"
       z-index= "2"
/>
<PolygonCard
  position="relative"
  top="94px"
  left="193px"
    height="20px"
    width="88px"
    zIndex={2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/>  
<div className='c7'>DRF</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "520px"
       top= "74px"
       z-index= "2"
/>
<PolygonCard
  position="relative"
  top="94px"
  left="220px"
    height="20px"
    width="101px"
    zIndex={-2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/> 
<div className='c8'>PJ</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "600px"
       top= "74px"
       z-index= "2"
/>
<PolygonCard
  position="relative"
  top="94px"
  left="258px"
    height="20px"
    width="88px"
    zIndex={2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/> 
<div className='c9'>PT</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "680px"
       top= "74px"
       z-index= "2"
/>

<PolygonCard
  position="relative"
  top="94px"
  left="290px"
    height="20px"
    width="101px"
    zIndex={-2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/> 
<div className='c10'>FJ</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "760px"
       top= "74px"
       z-index= "2"
/>

<PolygonCard
  position="relative"
  top="94px"
  left="326px"
    height="20px"
    width="87px"
    zIndex={2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
   
/> 
<div className='c11'>MP</div>
<Diamond
       position= "absolute"
       color="linear-gradient(135deg, #93c5fd, #3b82f6)"
       size = "100px"
       left= "840px"
       top= "74px"
       z-index= "2"
/>
<Arrow
left= "883px"
top= "81px"

color="linear-gradient(135deg, #fca5a5, #ef4444)"
    size="70px"
    zIndex={2}
/>
</div>
<div className='container2'>
       <Vertical first = "QDRII" second="CDRII" third = "PDRII"/>
       
</div>
<div className='container3'>
       <Vertical first = "QDRI" second="CDRI" third = "PDRI"/>
       
</div>
<div className='container4'>
       <Vertical first = "QDRF" second="CDRF" third = "PDRF"/>
       
</div>
    </div>
  );
}

export default App;
