import React from 'react'
import bijli from '../assets/bijli.png'
import './display1.css'
import { AiOutlineTwitter } from "react-icons/ai";


export const Display1 = (props) => {
    return (
        <>
            <div className='card-wrapper'>
                
                    {/* <img src={bijli} /> */}
                    <div>
                        <img src={props.showicon} width='30px'/>
                    </div>
                
                    <div>
                        {props.visual}
                    </div>
                    <h4>
                        {props.title}
                    </h4>
                    <p>{props.desc}</p>
                
            </div>
        </>
    )
}
