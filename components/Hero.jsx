import css from "../styles/Hero.module.css";
// import Image from "next/image";
// import { useState } from "react";
// import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import React from 'react'
const Hero = () => {
  // const [index, setIndex] = useState(0);
  // const images = [
  //   "/img/featured.png",
  //   "/img/featured2.png",
  //   "/img/featured3.png",
  // ];

  // const handleArrow = (direction) =>{
  //     if(direction==="l"){
  //         setIndex(index !== 0 ? index-1 : 2)
  //     }
  //     if(direction==="r"){
  //         setIndex(index !== 2 ? index+1 : 0)
  //     }
  // }

  return (
   
    <video className={css.container} autoPlay loop muted>
    <source
      src="https://player.vimeo.com/external/278954650.sd.mp4?s=ceb458282b284a14db9dca3f234bb109cf3e3818&profile_id=164"
      type="video/mp4"
      
    />
  </video>
 
);
}
export default Hero;

// https://player.vimeo.com/external/278954650.sd.mp4?s=ceb458282b284a14db9dca3f234bb109cf3e3818&profile_id=164

    // <div className={styles.container}>
    //   <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
    //     <IoIosArrowBack layout="fill" size={50}   />
    //   </div>
    //   <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
    //     {images.map((img, i) => (
    //       <div className={styles.imgContainer} key={i}>
    //         <Image src={img} alt="" objectfit="contain" layout="fill" />
    //       </div>
    //     ))}
    //   </div>
    //   <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
    //     <IoIosArrowForward size={50} layout="fill" alt="" objectfit="contain" />
    //   </div>
    // </div>
  

