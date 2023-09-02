"use client"
import React, {useState} from 'react'
import Styles from "./navbar.module.css"
import Image from 'next/image'
import bill from "./images/bill.svg"
import logo from "./images/image2.svg"
import { Poppins } from 'next/font/google'
import searchImage from "./images/search.svg"
import clear from "./images/clear.svg"

const poppins  = Poppins({
    weight: "500",
    subsets: ["latin"],
})


const Navbar = () => {
    const [search, setSearch] = useState(false)
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        setSearch(!search)
    }
    


  return (
    <div className={Styles.navbar} id='nav' >
        <div className={Styles.container} >
            <button style={poppins.style} className={Styles.button} > <Image alt='bill' src={bill} width={20} height={20}  /> Bill</button>
            <h2 style={poppins.style} className={Styles.text}> <Image alt='logo' src={logo} width={45} height={45} /> Restaurant </h2>
            <button className={Styles.button} onClick={handleSearch} > <Image alt='search'  width={22} height={22} src={searchImage} /> </button>
        </div>
        <br />
        {search &&
        <div className={Styles.input} >
        <input className={Styles.input1} type="text" value={searchText} style={poppins.style} onChange={(e)=>{setSearchText(e.target.value)}} placeholder="Search for restaurant" />
         <button className={Styles.clear} onClick={handleSearch} ><Image  alt='clear' src={clear} width={19} height={19}  /></button>
        </div>
        }
        {/* <h3 className={Styles.choose}>Choose A Restaurant :</h3> */}
    </div>
  )
}

export default Navbar