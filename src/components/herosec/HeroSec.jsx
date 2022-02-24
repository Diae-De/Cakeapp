
import "./Herosec.css";
import { motion } from "framer-motion"
import { useState } from "react";

export default function HeroSec(props) {

    const [active,setActive] = useState(false)
    const [active1,setActive1] = useState(false)
    const [active2,setActive2] = useState(false)
    function clicktun(){
        setActive(preStat => !preStat)
    }

    function clicktun2(){
        setActive1(preStat => !preStat)
    }

    function clicktun3(){
        setActive2(preStat => !preStat)
    }
  return (
    <>
        <div className="hero">
            <motion.div className="items" drag="x" dragConstraints={{left:-221,right:201}}>
                <div  onClick={clicktun} className={active ? "dark" : "light"}>CAKE</div>
                <div  onClick={clicktun2} className={active1 ? "dark" : "light"} id="cookie">COOKIES</div>
                <div  onClick={clicktun3} className={active2 ? "dark" : "light"}>PIES</div>
            </motion.div>
        </div>
    </>
  )
}
