import React from 'react'
import './Productview.css'
import {AiOutlineHeart} from 'react-icons/ai'
import { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

export default function ProductView() {

    const[add,setAdd] = useState(1)

    function addnum(){
        setAdd(prevState => add +1 )
    }

    function minnum(){
        setAdd(prevState => add -1 )
        if(add <= 0){
            setAdd(add => add === 0)
        }
    }
  return (
    <>
        <div className="products">
            <Link to="/"><IoMdClose className="xarrow"/></Link>
            <div className="productimg"><img src="../../../../img/cake2.png"/></div>
            <div className="productbackground">YOUR CHOICE!</div>
            <div className="productborder"></div>
            <div className="productbackcolor"></div>
            <div className="producttitle">                
                <p className="title">FLUFFY PANCAKE</p>                                
                <AiOutlineHeart className="heart"/>                
                <p className="price">$16</p>
            </div>
    
            <Fade top>
            <div className="desc">
                <div className="pdesc">Description</div>
                <div className="paradesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Voluptatem quidem aliquam delectus repudiandae eum! Molestias 
                    fugit neque dolor quia fuga! Officia,
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="counter">
                <div className="min" onClick={minnum}>-</div>
                <div className="num">{add}</div>
                <div className="plus" onClick={addnum}>+</div>
            </div>
            <div className="btn">Confirm</div>
            </Fade>
        </div>
    </>
  )
}
