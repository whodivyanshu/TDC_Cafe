import React from 'react'
import Styles from "./foodlist.module.css"
import FoodItem from './fooditem/FoodItem'


const FoodList = (prop) => {
  return (

    <div className={Styles.container} >

        <h3  >Coffee</h3>
        <div className={Styles.items} >
        <FoodItem image1="https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" name="Americano" cnt = "Regular tea with the flavour of ginger and cardamom." />
        <FoodItem name="Cafe Mocha" image1="https://plus.unsplash.com/premium_photo-1663012978924-5bfd443ac932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhZmUlMjBtb2NoYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" cnt="Boiled with Original mint leaves."  />
        <FoodItem name="Irish Coffee" image1 = "https://images.unsplash.com/photo-1549057219-0c0be1287566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXJpc2glMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" cnt="Mix of 5 herbs." />
        <FoodItem name="Layered Espereso" image1 ="https://images.unsplash.com/photo-1508088405209-fbd63b6a4f50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxheWVyZWQlMjBlc3ByZXNzb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" cnt="Sitting directly on top of the espresso is the first layer known as the crema. "  />
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
        </div>
    </div>
  )
}

export default FoodList