import React from 'react'
import Image from 'next/image'
import Styles from "./homepage.module.css"
import image1 from "./images/image1.png"
import image2 from "./images/image2.svg"
import orderfood from "./images/orderfood2.svg"
import bill from "./images/bill.svg"
import Link from 'next/link'

const Homepage = () => {
  return (
    <div className={Styles.container} >
      <Image  className={Styles.image1} alt='Image'  src={image1}    />
      <div className={Styles.text}>
      <Image width="110" height="110" src={image2} alt="tableware"/>
        <h1>Restaurant</h1>
        <div className={Styles.btn} >
          <button className={Styles.button} > <Image alt='bill'  src={bill} width={27} height={27} /> Request for bill</button>
          <Link href="/restaurant">
          <button  className={Styles.button} >  <Image alt='' src={orderfood} width={27} height={27} /> Order Food</button>
          </Link>
        </div>
      </div>
      <Image  className={Styles.image1} alt='Image'  src={image1}    />
    </div>
  )
}

export default Homepage;