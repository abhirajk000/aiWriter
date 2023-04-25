import React from 'react'
import './display2.css'


const Display2 = (props) => {
  return (
    <>
      <div className='card-wrapper2'>
        <div style={{display:"flex", justifyContent:"spaceBetween", gap:"4rem", alignItems:"center"}}>
          <h4>{props.title} </h4><img src={props.showicon} width='30px' />
          </div>
      </div>
    </>
  )
}

export default Display2