import React from 'react'
import './about.css'
import arzamaan from '../assets/Arzamaanim.jpg'
import lady from '../assets/lady.png'

import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
    return (
        <>
            <div className='main-banner'>
                <div className='banner-maal'>
                    <h1>About WriteKit</h1>
                    <p>On a journey to reimagine content writing!
                    </p>
                </div>
            </div>
            <div className='sample-page-wrapper'>
                <h3>Background</h3>
                <p>While exploring the potential of the OpenAI/GPT-3 technology in another chatbot project and seeing the poor quality of existing AI copywriting alternatives, we decided it was time to offer the market what it deserved &mdash; an intuitive AI writing assistant that provided the best content, period.</p>
                <p>We launched in Apr 2021 and haven't looked back since then. With a growing base of&nbsp;60,000+ Rytrs globally and close to perfect ratings everywhere, we are now recognized as the market leader in this space with even bigger plans for the future.</p>
                <h3>Vision & Mission</h3>
                <p>Our vision is to become the de facto, all-in-one writing assistant that will work across your whole writing workflow, replacing the need to have 5-10 writing apps that you might use at the moment.</p>
                <h3 className='meet-the-team' >Meet the Team</h3>
                <div className='team-container'>
                    <div className='people-box'>
                        <img src={arzamaan} />
                        <p className='people-name'>Arzamaan Hussain</p>
                        <p>Crazy Wizard</p>
                        <div className='people-icons'>
                            <AiFillLinkedin /> <AiOutlineTwitter /> <AiOutlineMail />
                        </div>
                    </div>
                    <div className='people-box'>
                        <img src={lady} />
                        <p className='people-name'>Arzamaan Hussain</p>
                        <p>Crazy Wizard</p>
                        <div className='people-icons'>
                            <AiFillLinkedin /> <AiOutlineTwitter /> <AiOutlineMail />
                        </div>
                    </div>
                    <div className='people-box'>
                    <img src={lady} />
                        <p className='people-name'>Arzamaan Hussain</p>
                        <p>Crazy Wizard</p>
                        <div className='people-icons'>
                            <AiFillLinkedin /> <AiOutlineTwitter /> <AiOutlineMail />
                        </div>
                    </div>
                    <div className='people-box'>
                    <img src={lady} />
                        <p className='people-name'>Arzamaan Hussain</p>
                        <p>Crazy Wizard</p>
                        <div className='people-icons'>
                            <AiFillLinkedin /> <AiOutlineTwitter /> <AiOutlineMail />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About