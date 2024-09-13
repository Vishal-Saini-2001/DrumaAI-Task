import React from 'react'
import '../css/footer.css'

const Footer = () => {
    return (
        <div id='footer-page'>
            <center>
                <h1 className='merriweather-sans-footer'>Get in Touch with Druma.ai</h1>
                <p>We're here to help you transform your business with AI. Reach out to us with any questions or inquiries</p>
            </center>
            <div id='boxes'>
                <div id='contact'>
                    <h2>Contact Us</h2>
                    <form>
                        <input type='text' placeholder='name' required className='inputs'></input>
                        <br />
                        <input type='email' placeholder='email' required className='inputs'></input>
                        <br />
                        <textarea placeholder='message' className='msg-input'/>
                        <br />
                        <button class="button  email" type='submit'>Send Message</button>
                    </form>
                </div>
                <div id='contact-info'>
                    <h2>Contact Information</h2>
                    <ul className='merriweather-sans-footer-text'>
                        <li><i class="fa-solid fa-envelope"></i> &nbsp; info@druma.ai</li>
                        <li><i class="fa-solid fa-phone"></i> &nbsp; +1-800-123-4567</li>
                        <li><i class="fa-solid fa-house"></i> &nbsp; 123 AI Blvd, Tech City, TX 98765, USA</li>
                    </ul>
                </div>
                <div id='time'>
                    <h2>Additional Information</h2>
                    <h3 className='merriweather-sans-footer-text'><i class="fa-solid fa-briefcase"></i> &nbsp; Working Hours</h3>
                    <ul className='merriweather-sans-footer-text'>
                        <li>Monday - Friday: 9:00 AM to 6:00 PM</li>
                        <li>Saturday: 10:00 AM to 4:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                    <h3 className='merriweather-sans-footer-text margin'><i class="fa-solid fa-share-from-square"></i> &nbsp; Follow Us</h3>
                    <div id='social'>
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook-f icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-twitter icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-linkedin-in icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-google-plus-g icon"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer