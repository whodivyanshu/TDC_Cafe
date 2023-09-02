"use client"
import React, {useState} from 'react'
import Styles from "./fooditem.module.css"
import Image from 'next/image'
import veg from "./veg.svg"
import { Poppins } from 'next/font/google'
import image1 from "./image1.jpg"
import Customization from './customization/Customization'

const poppins =  Poppins({
  weight: ["600", "400"],
  subsets: ['latin'],
})

const FoodItem = (prop) => {
  const [count, setCount] = useState(0);
  const [customization, setCustomization] = useState(false);
  
  const handlePlus = ()=>{
    setCustomization(true);
    document.body.style.overflow = "hidden";
    const nav = document.getElementById('nav');
    nav.style.backgroundColor = "rgb(184, 184, 184)";
    document.body.style.backgroundColor = "rgb(184, 184, 184)";
    
    
  }
  const handleClose = ()=>{
    setCustomization(false);
    document.body.style.overflow = "scroll";
    const nav = document.getElementById('nav');
    nav.style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
  }
  const handleMinus = ()=>{
    if(count>0){
      setCount(count-1);
    }
  }


  return (
    <div className={Styles.container} >
      <div className={Styles.top}>

        <Image className={Styles.veg} alt='veg' src={veg}  height={20} width={20} />
        <div className={Styles.text} >
            <h2 style={poppins.style} >{prop.name}</h2>
            <p style={poppins.style} >{prop.cnt}</p>
        </div>
      </div>
        <div className={Styles.image} >
            <Image className={Styles.img} alt='image'  src={prop.image1} height={130} width={130} />
            {count ? 
            <div className={Styles.add} >
            <button className={Styles.cntbtn} onClick={handleMinus} >-</button>
            <h3>{count}</h3>
            <button className={Styles.cntbtn} onClick={handlePlus} >+</button>
          </div>
          : 

            <div className={Styles.add} >
              <h3 style={poppins.style} onClick={handlePlus} >Add</h3>
            </div>
            }
            
            
        </div>
        {customization && <Customization closeCustom = {handleClose} />}
    </div>
  )
}

export default FoodItem