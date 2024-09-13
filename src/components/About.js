import React from 'react'
import '../css/about.css'
import logo from '../assets/drumabig.webp'

export const About = () => {
    return (
        <div id='about-page'>
            <center><h1 className='merriweather-sans-about'><span>About Us</span></h1></center>
            <div id='about-display'>
                <div id='about-image-div'>
                    <img src={logo}></img>
                </div>
                <div id='about-content' className='merriweather-sans-fonts'>
                    <h2>What We Do</h2>
                    <p>At Druma.ai, we harness the power of artificial intelligence to help businesses transform data into actionable insights. Our advanced AI solutions are designed to automate complex processes, improve decision-making, and drive innovation across industries.</p>
                    <br />
                    <br/>
                    <h2>Why Choose Us?</h2>
                    <br/>
                    <ol class="alternating-colors">
                        <li>
                            <strong>Intelligent Automation</strong>
                            <p>Leverage AI to streamline your workflows and increase efficiency</p>
                        </li>
                        <li>
                            <strong>Custom AI Solutions</strong>
                            <p>Tailored solutions that meet the unique needs of your business.</p>
                        </li>
                        <li>
                            <strong>Data-Driven Insights</strong>
                            <p>Use the power of data to make informed decisions</p>
                        </li>
                        <li>
                            <strong>Cutting-Edge Technology</strong>
                            <p>Stay ahead of the curve with our state-of-the-art AI algorithms.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
