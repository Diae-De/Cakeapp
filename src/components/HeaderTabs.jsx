import React from 'react'
import "./Headerstyle.css"
import image from "../images/icon.jpg"
import { BsListNested } from "react-icons/bs";
import {HiShoppingCart} from "react-icons/hi"

export default function HeaderTabs() {
  return (
    <>
    <div className="Tabs">
        <img className="image" src={image}/>
        <div className="infosec">
            <div className="date">Monday,June</div>
            <div className="todaysdo">What would like to do!</div>
        </div>
        <div className="carticon"><HiShoppingCart/></div>
        <div className="listicon"><BsListNested/></div>
    </div>
        
    </>
  )
}
