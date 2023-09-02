import React, {useEffect, useState} from 'react'
import Styles from "./customization.module.css"
import Image from 'next/image'
import veg from "./veg.svg"
import clear from "./clear.svg"

import { Poppins } from 'next/font/google'


const poppins = Poppins({
  weight: ["600", "400"],
  subsets: ['latin'],
})




const Customization = ({closeCustom}) => {


  
  


  const [count, setcount] = useState(1);
  const [isAnimating, setisAnimating] = useState(false)
  const [totalCount, settotalCount] = useState(139.00);

  const plus = () => {
    setcount(count + 1)
  }
  const minus = () => {
    if(count > 1){

      setcount(count - 1)
    }
    else{
      closeCustom();
    }
  }
  const main = 139.00;
  const main2 = 220.00;





  return (

    <div className={Styles.container } >
      <div>

        <div className={Styles.top} >

            <Image alt='veg' src={veg} width={23} height={23} />
            <h3>Americano</h3>
            <Image className={Styles.close} alt='close' onClick={closeCustom}  src={clear} width={23} height={23} />
        </div>
        <hr className={Styles.hr  } />
        <div className={Styles.mid} >
          <div className={Styles.mid1}>

          <div className={Styles.ml}>
            <h3>250 ML</h3>
          </div>
          <div className={Styles.price}>
            <h3>₹ {main}</h3>
            <input checked type="radio"  name="checkbox" id="check1" value={main} onClick={()=>settotalCount(main)} />
          </div>
          </div>
          <div className={Styles.mid1}>

          <div className={Styles.ml}>
            <h3>400 ML</h3>
          </div>
          <div className={Styles.price}>
            <h3>₹ {main2}</h3>
            <input type="radio"  name="checkbox" id="check1" value={main2} onClick={()=>{settotalCount(main2)}} />
          </div>
          </div>
        </div>
        <hr className={Styles.hr  } />
        <div className={Styles.last} >
          <h3>Topping</h3>
          <div className={Styles.topping}>
            <div className={Styles.name}>
              <h3>Ice Cream Topping</h3>

            </div>
            <div className={Styles.price} > 
              <h3>₹ 30.00 </h3>
              <input type="checkbox" onClick={()=>{
                const main3 = totalCount + 30;
                settotalCount(main3);
              }} />
            </div>
          </div>
        </div>
      </div>
        <div className={Styles.submit} >
          <div className={Styles.plus}>
            <button onClick={minus} >-</button>
            <h3 >{count}</h3>
            <button onClick={plus}>+</button>
          </div>
          <button style={poppins.style} >Add - ₹ {totalCount}</button>
        </div>
    </div>
  )
}

export default Customization