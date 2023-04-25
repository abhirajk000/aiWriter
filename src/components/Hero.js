import React from 'react'
import './hero.css'


export const Hero = () => {
    return (
        <>
            <div className='textandcards2'>
                <div className='onlytext2'>
                    <h2> <span className='first-gr'>Unlock the power</span> <span className='second-gr'>of AI writing</span></h2>
                    <p>WriteKit is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!</p>
                   <div style={{display:"flex", justifyContent:"center"}}> <a href='#usecases'><button className='writing-btn'>Start Writing</button></a></div>
                </div>
        
            </div>
        </>
    )
}
