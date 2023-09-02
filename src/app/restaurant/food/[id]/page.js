import React from 'react'
import Styles from "./page.module.css"
import FoodList from '@/components/foodlist/FoodList'
import Navbar from '@/components/navbar/Navbar'

const FoodPage = ({params}) => {
  return (  
    <div>
        <Navbar/>
        <FoodList id = {params.id} />
    </div>
  )
}

export default FoodPage