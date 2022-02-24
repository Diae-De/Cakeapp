import React from 'react'
import './Buildsec.css'
import { useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

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
            <Link to="/product"><img src={product.imge} alt=""></img></Link>            
            <div className="productinfo">
              <div className="disjinfo">{product.name}</div>
              <div className="dishprice">{product.price}</div>
            </div> 
            <div className="heart">
              <div className="redline"></div>
              <div className="btnlike">{redc?(<div onClick={red}>{product.like}</div>):(<AiFillHeart onClick={red} color="red"/>)}</div>
            </div>
          </div>
        )
      })}</div>
    </div>
    
        
    </>
  )
}
