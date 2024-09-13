import React from 'react'
import img1 from '../assets/img1.jpg'
import '../css/home.css'

const Home = () => {
    return (
        <div id='home-page'>

            <div id='home-content'>
                <h1 className='merriweather-sans-headings'>Unlock the Power of AI with <span className='text-gradient'>Druma.ai</span></h1>
                <p>Streamlining business solutions through AI-powered insights and automation.</p>
                <button class="glow-on-hover" type="button">Get Started Today</button>
            </div>

            <div id='home-image-div'>
                <img src={img1} alt='image' ></img>
            </div>
        </div>
    )
}

export default Home