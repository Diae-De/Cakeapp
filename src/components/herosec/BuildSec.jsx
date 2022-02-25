import React from 'react'
import './Buildsec.css'
import { useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

export default function BuildSec({data}) {

  const [redc,setRed] = useState(true)

  function red(){
      setRed(!redc);
  }
  return (
    <>
    
    <div className="allinfo">
      <div className="dishe">{data.map((product, index) =>{
        return(
          <div className="prod" key={index}>
            <Fade bottom>
            <Link to="/product"><img src={product.imge} alt=""></img></Link>   
            </Fade>
            <Fade top>        
            <div className="productinfo">
              <div className="disjinfo">{product.name}</div>
              <div className="dishprice">{product.price}</div>
            </div> 
            </Fade> 
            <div className="heart">
              <div className="redline"></div>
              <Fade right>
              <div className="btnlike">{redc?(<div onClick={red}>{product.like}</div>):(<AiFillHeart onClick={red} color="red"/>)}</div>
              </Fade>
            </div>
          </div>
        )
      })}</div>
    </div>
    
        
    </>
  )
}
