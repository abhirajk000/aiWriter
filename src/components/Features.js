import React from 'react'
import './features.css'
import { Display1 } from './Display1'
import Display2 from './Display2'
import flashim from '../assets/flashim.svg'
import CalltoAction from './CalltoAction'
import Feedback from './Feedback'
import Pricing from './Pricing'
import twitteric from '../assets/twitteric.svg'
import pencilim from '../assets/pencilim.svg'
import producticon from '../assets/producticon.png'
import gmailicon from '../assets/gmailicon.png'





export const Features = () => {
    return (
        <>
            <div className='textandcards' id='usecases'>
                <div className='onlytext'>
                    <h2>Write 10X Faster with AI <img src={flashim}/></h2>
                    <p>Auto-generate catchy, original, and high-converting copies in popular tones in just a few seconds.</p>
                </div>
                <div className='onlycards' >
                    <div className='layout1'>
                        <a href="social-post-writer"><Display1 showicon={twitteric} title="Social Post Writer" desc="Generate killer content for your social posts like never before & Unlock engagement!"/></a>
                        <a href='seo-content-writer'><Display1 showicon={pencilim} title="SEO Content Writer" desc="From meta descriptions to blog paras, everything to rank you on Google!"/></a>
                    </div>
                    <div className='layout2'>
                        <a href='product-description-writer'><Display2 title="Product Description" showicon={producticon} /></a>
                       <a href='cold-email-writer'> <Display2 title="Cold Email" showicon={gmailicon} /></a>
                    </div>
                </div>

            </div>
        
            <div className='cta-wala-container'>
                    <CalltoAction/>
            </div>
            <Pricing/>
        </>
    )
}
