import React from 'react'
import { Diamond, Arrow } from "react-awesome-shapes";
import './Vertical.css'
import { PolygonCard} from 'react-awesome-shapes/dist/shapes/polygonCard';
function Vertical(props) {
  return (
    <div>
        <PolygonCard
className ="vpg"
left= "220px"
position="absolute"
top="-50px"
  height="124px"
  width="20px"
  zIndex={-2}
  color="linear-gradient(135deg, #fca5a5, #ef4444)"
 
/>     
<div className='vc1'>{props.first}</div>


<Diamond
className ="vd"
     position= "absolute"
     color="linear-gradient(135deg, #93c5fd, #3b82f6)"
     size = "100px"
     left= "200px"
     top= "0px"
     z-index= "3"
/>





<PolygonCard
className ="vpg"
left= "220px"
position="absolute"
top= '50px'
  height="88px"
  width="20px"
  zIndex={0}
  color="linear-gradient(135deg, #fca5a5, #ef4444)"
 
/>     
<div className='vc2'>{props.second}</div>


<Diamond
className ="vd"
     position= "absolute"
     color="linear-gradient(135deg, #93c5fd, #3b82f6)"
     size = "100px"
     left= "200px"
     top= "85px"
     z-index= "3"
/>
<PolygonCard
className ="vpg"
left= "220px"
position="absolute"
top= '132px'
  height="88px"
  width="20px"
  zIndex={-2}
  color="linear-gradient(135deg, #fca5a5, #ef4444)"
 
/>   
<div className='vc3'>{props.third}</div>
<Diamond
className ="vd"
     position= "absolute"
     color="linear-gradient(135deg, #93c5fd, #3b82f6)"
     size = "100px"
     left= "200px"
     top= "170px"
     z-index= "3"
/>
<Arrow
className= "va"
left= "298px"
top= "132px"

color="linear-gradient(135deg, #fca5a5, #ef4444)"
    size="70px"
    zIndex={2}
/>
    </div>
  )
}

export default Vertical