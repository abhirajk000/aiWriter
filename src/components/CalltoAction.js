import React from 'react'
import './calltoaction.css'
import ctaimg from '../assets/firehairim.svg'

const CalltoAction = () => {
  return (
    <>
      <div className='cta-wrapper'>
            <div className='cta-card'>
                <div className='cta-left'>
                    <p>Love our tool?</p>
                    <h3>Join our 7 Days Free Trial!</h3>
                    <a href='login'>
                    <button className='cta-btn'>Let's Try</button></a>
                </div>
                <div className='cta-right'>
                <img src={ctaimg} width='350px'/>
                </div>
            </div>
       </div>
    
    </>
  )
}

export default CalltoAction