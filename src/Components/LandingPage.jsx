import React from 'react'
import "../css/LandingPage.css"
import img4 from "../Images/img4.png"
import website1 from "../Images/website1.jpg"
import website2 from "../Images/website2.jpg"
import graphic1 from "../Images/graphic1.jpg"
import graphic2 from "../Images/graphic2.jpg"
import social1 from "../Images/social1.jpg"
import social2 from "../Images/social2.jpg"
import extra1 from "../Images/extra1.jpg"
import extra2 from "../Images/extra2.jpg"
import girl1 from "../Images/girl1.jpg"
import boy1 from "../Images/boy1.png"
import boy2 from "../Images/boy2.jpg"
import butterfly from "../Images/butterfly2.svg"
import qr from "../Images/qr-code.png"
import neon from "../Images/neon.svg"
export default function LandingPage() {
  return (
    <>
    <div className="landing-section">

        <div className="landing-section-left">
            <h4>It's</h4>
            <h3>Time To Innovate</h3>
            <h1 className="gradient-text">Your Business <sup><img src={butterfly} alt="" /></sup></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odio impedit architecto quidem blanditiis eum quibusdam maiores iste corporis minima.</p>
            <a href="#features" className="btn-a gradient-btn">Explore Services</a>
        </div>
        <div className="landing-section-right">
          <img src={neon} alt="" />
        </div>
    </div>
    <div className="our-features" id='features'>
        <h2 className="gradient-text">Our Services</h2>
        <div className="mood-analysis analysis-section">
            <div className="analysis-section-left">
              <h3 className='gradient-text'>Website Development</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cumque, doloremque possimus perferendis impedit odit eveniet assumenda nostrum quod quasi delectus recusandae! Deleniti, sed adipisci. Molestias nesciunt mollitia cupiditate, placeat ad eaque commodi itaque amet possimus et id recusandae ducimus!</p>
              <div className="bullets">
                <li>Static Websites</li>
                <li>Dynamic Websites</li>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>Clone of Website</li>
                <li>Website Designing</li>
              </div>
              <a href="#qrSection" className="btn-a gradient-btn">Explore Now</a>
            </div>
            <div className="analysis-section-right">
                <img src={website1} alt="" className='small-img' />
                <img src={website2} alt="" className='big-img' />
            </div>
        </div>
        <div className="emotion-analysis analysis-section">
            <div className="analysis-section-right">
                <img src={graphic1} alt="" className='small-img' />
                <img src={graphic2} alt="" className='small-img' />
            </div>
            <div className="analysis-section-left">
              <h3 className='gradient-text'>Graphic Designing</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cumque, doloremque possimus perferendis impedit odit eveniet assumenda nostrum quod quasi delectus recusandae! Deleniti, sed adipisci. Molestias nesciunt mollitia cupiditate, placeat ad eaque commodi itaque amet possimus et id recusandae ducimus!</p>
              <div className="bullets">
                <li>Posters</li>
                <li>Stories</li>
                <li>Brochure</li>
                <li>Banners</li>
                <li>Infographic</li>
                <li>Logo</li>
              </div>
              <a href="#qrSection" className="btn-a gradient-btn">Explore Now</a>
            </div>
        </div>
        <div className="meritate-analysis analysis-section">
            <div className="analysis-section-left">
              <h3 className='gradient-text'>Social Media Management</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cumque, doloremque possimus perferendis impedit odit eveniet assumenda nostrum quod quasi delectus recusandae! Deleniti, sed adipisci. Molestias nesciunt mollitia cupiditate, placeat ad eaque commodi itaque amet possimus et id recusandae ducimus!</p>
              <a href="#qrSection" className="btn-a gradient-btn">Explore Now</a>
            </div>
            <div className="analysis-section-right">
                <img src={social1} alt="" className='small-img' />
                <img src={social2} alt="" className='big-img' />
            </div>
        </div>
        <div className="emotion-analysis analysis-section">
            <div className="analysis-section-right">
                <img src={extra2} alt="" className='big-img' />
                <img src={extra1} alt="" className='small-img' />
            </div>
            <div className="analysis-section-left">
              <h3 className='gradient-text'>Miscellaneous Services</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cumque, doloremque possimus perferendis impedit odit eveniet assumenda nostrum quod quasi delectus recusandae! Deleniti, sed adipisci. Molestias nesciunt mollitia cupiditate, placeat ad eaque commodi itaque amet possimus et id recusandae ducimus!</p>
              <div className="bullets">
                <li>Portfolio Website</li>
                <li>Resume Building</li>
                <li>Typing Work</li>
              </div>
              <a href="#qrSection" className="btn-a gradient-btn">Explore Now</a>
            </div>
        </div>
    </div>


    <div className="about-us">
      <div className="about-us-left">
        <h2 className='gradient-text'>Who We Are?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda mollitia non obcaecati? Mollitia officia incidunt voluptate nobis fugiat repudiandae explicabo debitis sed commodi sunt.</p>
        <br/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repellat omnis odio, deleniti unde blanditiis voluptatum totam laudantium fuga ut, possimus odit ab. Animi numquam accusantium deserunt, porro dolor minima dolore aspernatur, repudiandae harum doloremque iure autem praesentium sunt inventore?</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, temporibus.</p>
        <br/>
        <br/>
        <a href="#" className="btn-a gradient-btn">Know More</a>
      </div>
      <div className="about-us-right">
        <img src={neon} alt="" />
      </div>
    </div>
    <div className="explore-feature">
      <h2>Our Testimonials</h2>
      <div className="explore-feature-card-section">
        <div className="feature-card">
        <img src={girl1} alt="" />
        <h4>Sana Fathima</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perspiciatis aspernatur corporis voluptates quam sunt!</p>
        </div>
        <div className="feature-card">
        <img src={boy1} alt="" />
        <h4>Ashu Malik</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perspiciatis aspernatur corporis voluptates quam sunt!</p>
        </div>
        <div className="feature-card">
        <img src={boy2} alt="" />
          <h4>Ashish</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perspiciatis aspernatur corporis voluptates quam sunt!</p>
        </div>
      </div>
    </div>
    <div className="qr-section" id='qrSection'>
      <div className="qr-box">
        <div className="qr-box-left">
        <h1>Scan <span className='gradient-text'>QR</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus quam quisquam. Tenetur dolore, eligendi culpa laboriosam libero cupiditate soluta amet voluptate sit reprehenderit quam dignissimos suscipit! Commodi, aliquam eius.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi aliquid quae maiores nulla provident labore distinctio similique est recusandae!</p>
        <h4 className='gradient-text'>Go To Link</h4>
        <a href="https://drive.google.com/drive/folders/1uD096cJPEb8op8prKjgcjT-xSBVaWJeD?usp=sharing" target='blank' className="btn-a gradient-btn">Check My Work</a>
        </div>
        <div className="qr-box-right">
          <img src={qr} alt="" />
        </div>
      </div>
    </div>


    
    <div className="privacy-section">
      <img src={img4} alt="" />
      <div className="privacy-section-text">
        <h2>Is you <span>Data Safe</span>?</h2>
        <p>Privacy is our number one pledge. Clear's got your back with end-to-end encryption that's on by default. Your data syncs safely to our servers as a jumbled mess, so even if we wanted to peek (we don't), we couldn't. And don't worry, no one else can either - only you hold the key to unlock it. So go ahead and write about your love for spiders, your secrets are safe with us!</p>
      </div>
    </div>
    </>
  )
}
