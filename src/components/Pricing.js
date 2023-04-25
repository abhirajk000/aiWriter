import React from 'react'
import './pricing.css'
import Tick from '../assets/tickim.svg'
const Pricing = () => {
  return (
    <div className='text-pricingcards'>

      <div className='pricing-textcontent'>
        <p>Plans and Pricing</p>
        <h2>Ready to Get Started?</h2>

      </div>

      <div className="main-card">
        <div className="card-wrapper-1">
          <div className="pricing-card">
            <div className="card-section-1">
              <h1>Free</h1>
              
            </div>
            <hr />
            <p className='colour'>Service</p>
            <div className="card-section-2">
              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>5k words /month</p>
              </div>

              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Access 20+ use-cases</p>
              </div>

              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Choose from 10+ tones</p>
              </div>

              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Built in plagiarism checker</p>
              </div>

              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Live chat support</p>
              </div>

            </div>
            <button className='btn-1'>Get Started</button>
          </div>
        </div>

        <div className="card-wrapper-2">
          <div className="pricing-card">
            <div className="card-section-1">
              <h1>Unlimited</h1>
              <h3>$25.00 USD</h3>
            </div>
            <hr />
            <p className='colour'>Service</p>
            <div className="card-section-2">
              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Unlimited words</p>
              </div>

              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Access 20+ use-cases</p>
              </div>

              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Choose from 10+ tones</p>
              </div>

              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Built in plagiarism checker</p>
              </div>

              <div className="card-section-3">
                <img src={Tick} alt="" />
                <p>Priority live chat support</p>
              </div>


            </div>
            <button className='btn-1'>Get Started</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Pricing
