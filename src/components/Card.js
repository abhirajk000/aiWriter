import React from 'react'
import lady from "../assets/lady.png"
import './card.css'
import Cardimg from '../assets/cardimg.svg'
const card = (props) => {
  return (
    <div>
       <div className="card-1">
        <img className='cardimg' src={Cardimg} alt="" />
            <p>{props.test}</p>
            <div className="card-content">
                <img src={lady} alt="" />
                <div className="card-text">
                    <h5>{props.name}</h5>
                    <h6>{props.position}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card
