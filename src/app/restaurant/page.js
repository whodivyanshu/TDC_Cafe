import Navbar from '@/components/navbar/Navbar'
import Restaurants from '@/components/restaurants/Restaurants'
import Styles from "./page.module.css"
import React from 'react'

const Restro = () => {
  return (
    <div className={Styles.body2}>
        <Navbar/>
        <Restaurants/>
    </div>
  )
}

export default Restro