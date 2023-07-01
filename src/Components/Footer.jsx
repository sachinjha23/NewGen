import React from 'react'
import "../css/Footer.css"
import apple from "../Images/apple.webp"
import google from "../Images/google.webp"

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-column column1">
                <h2 className='gradient-text'>Neurealm</h2>
                <p>Slogan of organization</p>
            </div>
            <div className="footer-column column2">
                <h3 className="gradient-text">Our Services</h3>
                <div className="footer-items">
                    <a href="#">Website Development</a>
                    <a href="#">Graphic Designing</a>
                    <a href="#">Social Media Management</a>
                    <a href="#">Miscellaneous</a>
                </div>
            </div>
            <div className="footer-column column3">
                <h3 className="gradient-text">Comming Soon</h3>
                <div className="footer-items">
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>
            <div className="footer-column column4">
                <h3 className="gradient-text">Contact Us</h3>
                <p>We're a tech company growing like a plant, eager for support and feedback to thrive. Share your gardening skills or water us with love - we'd be grateful to hear from you!</p>
                <a href="mailto:sachinjhaboss2003@gmail.com" className="btn-a">Send Email</a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>This website is Designed & Developed By <a href="#">Sachin Jha</a></p>
        </div>
    </div>
  )
}
