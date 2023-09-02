
import React from 'react'
import Styles from "./Restaurant.module.css"
import Image from 'next/image'
import image1 from "./image1.jpg"
const Restaurant = (prop) => {

  return (
    <div className={Styles.container} >
      <div className={Styles.image} >
        <Image className={Styles.img} alt='image1' src={prop.image} width={300} height={200} />
      </div>
      <div className={Styles.text} >
        <div className={Styles.text1}>

        <div className={Styles.name} >

        <h3>{prop.name}</h3>
        <p>{prop.tag}</p>
        </div>
        <div className={Styles.rating} >
          <p>

          ({prop.rating}★)
          </p>
        </div>
        </div>


      </div>
      <div className={Styles.hrcontainer} >

      <hr className={Styles.hr} />

      </div>
      <div className={Styles.price} >
        <p>

         Price Range ₹{prop.down}-₹{prop.up}
        </p>
      </div>
    </div>
  )
}

export default Restaurant