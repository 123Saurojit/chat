import React from 'react'

import { useRef , useEffect } from 'react'
import gsap from 'gsap';

const Click = ({style}) => {
    
  const elementRef = useRef(null);


  useEffect(() => {
    if (elementRef.current) {
      
      gsap.to(elementRef.current, {
        y: 30,              // Move 300 pixels to the right
        duration: 2,         // Duration of the movement
        ease: "power2.inOut", // Smooth ease for the movement
        yoyo: true,          // Return to the starting position
        repeat: -1,          // Repeat indefinitely
      });
    
    }
  }, []);
    
  return (
    <div className= {"  justify-center bg-slate-800  " + style}>
        <div className="  translate-y-[200px] text-4xl click-class h-fit"> 
        
        Click Any Contact To Chat
        <center>
          <img ref={elementRef} width="100" height="100" src="https://img.icons8.com/color/100/messaging-.png" alt="messaging-"/>
          </center>

        </div>
    </div>
  )


}

export default Click




  