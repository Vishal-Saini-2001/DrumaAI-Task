import React from 'react'
import '../css/services.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

const Services = () => {
    const data = [
        {
            img:img1,
            title: "AI-Powered Automation",
            desc: "Automate repetitive tasks and streamline your business processes with intelligent AI solutions designed to save time, reduce costs, and improve productivity."
        },
        {
            img:img2,
            title: "Machine Learning Solutions",
            desc: "Leverage our machine learning models to gain predictive insights, improve decision-making, and enhance business outcomes. Whether it’s customer behavior prediction or operational efficiency, our models are tailored to your needs."
        },
        {
            img:img3,
            title: "Natural Language Processing (NLP)",
            desc: "Utilize cutting-edge NLP to transform the way you interact with data. From chatbot solutions to sentiment analysis, we make it easier for businesses to understand and leverage language-driven insights."
        },
        {
            img:img4,
            title: "AI-Driven Data Analytics",
            desc: "Turn raw data into actionable insights with our AI-powered analytics solutions. We provide advanced data analysis to help you make informed, strategic decisions."
        },
        {
            img:img5,
            title: "Custom AI Solutions",
            desc: "Have a unique problem that needs a tailor-made solution? We offer bespoke AI development services, working closely with your team to build a solution that meets your specific business requirements."
        }
    ]
    return (
        <div id='service-page'>
            <center>
                <h1 className='merriweather-sans-service'>Our AI Solutions for Your Business</h1>
                <p className='playfair-display-text'>Empowering Your Business with Advanced AI Technologies</p>
            </center>
            <div id='services'>
                {
                    data.map((v, i) => {
                        return (
                            <div id='service' key={i}>
                                <img src={v.img} width={370}></img>
                                <h2>{v.title}</h2>
                                <div id='content'>
                                    <p className='playfair-display-text'>{v.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services