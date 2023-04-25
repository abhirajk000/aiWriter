import React from 'react'
import './footer.css'
import footerlogo from '../assets/writekit-logo-w.png'
import heartim from '../assets/heartim.svg'

const Footer = () => {
    return (
        <>
            <div className='g-wala'></div>
            <div className='footer-wrapper'>
                <div className='flexwalasec'>
                    <div className='about'>
                        <a href='/'><img src={footerlogo} /></a>
                        <p>WriteKit.ai is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!</p>
                    </div>
                    <div className='tools'>
                        <ul>
                            <li id='not-click'>Tools</li>
                            <li> <a href='social-post-writer'>Social Post</a></li>
                            <li> <a href='seo-content-writer'>SEO Content</a></li>
                            <li> <a href='product-description-writer'>Product Desc</a></li>
                            <li> <a href='cold-email-writer'>Cold Email</a></li>

                        </ul>
                    </div>
                    <div className='legal'>
                        <ul>
                            <li id='not-click'>Legal</li>
                            <li> <a href='#'>Privacy</a></li>
                            <li> <a href='#'>Licensing</a></li>

                        </ul>
                    </div>
                    <div className='company'>
                        <ul>
                            <li id='not-click'>Company</li>
                            <li> <a href='#'>About</a></li>
                            <li> <a href='#'>Contact</a></li>
                            <li> <a href='#'>Blog</a></li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className='copy-sec'>
                <hr style={{ color: "white" }} />
                <p>Copyright © 2023 WriteKit | Made with <img src={heartim} /> in India</p>
            </div>
        </>
    )
}

export default Footer