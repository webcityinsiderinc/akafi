import React from 'react'
import Navbar from '../Components/Navbar'
import support from "../images/orphan-support.jpg"
import flower from "../images/flower-line.png"
import arrow from "../images/arrow.png"
import women from "../images/women-empowerment.jpg"
import widow from "../images/widows-fund.jpg"
import Footer from '../Components/Footer'

function ActiveProgramm() {
  return (
  <>
  <Navbar/>
  <section className="hero-section"> <div className="hero-content"> <h1>ACTIVE PROGRAMS</h1> <p>Explore how you can make a difference by volunteering.</p> <button className="hero-btn">VOLUNTEER</button> </div> </section>
      <div className="orphan-section">
            {/* Right image */}
            <div className="orphan-right">
              <img src={support} alt="Support initiative" className="orphan-img" />
            </div>
            {/* Center image */}
            <img src={flower} alt="Orphan with supplies" className="flower-img" />
  
            {/* Left side text */}
            <div className="orphan-left">
              <h2>Orphan Support</h2>
              <p> When a child loses their parents, access to education becomes uncertain. <strong> AKAFI </strong> ensures orphans receive school uniforms, shoes, and learning materials — restoring confidence, dignity, and the opportunity to stay in school. </p>
              <button className="explore-btn">EXPLORE ORPHAN SUPPORT</button>
            </div>
          </div>
          {/*  */}
          <div className="orphan-section">
            {/* Center image */}
            <img src={arrow} alt="Orphan with supplies" className="flower-img" />
            {/* Left side text */}
            <div className="orphan-left">
              <h2>Women’s Empowerment & Resilience</h2>
              <p> When a child loses their parents, access to education becomes uncertain. <strong> AKAFI </strong> ensures orphans receive school uniforms, shoes, and learning materials — restoring confidence, dignity, and the opportunity to stay in school. </p>
              <button className="explore-btn">EXPLORE ORPHAN SUPPORT</button>
            </div>
            {/* Right image */}
            <div className="orphan-right">
              <img src={women} alt="Support initiative" className="orphan-img" />
            </div>
  
  
  
          </div>
          {/* widows fund */}
          <div className="orphan-section">
            {/* Right image */}
            <div className="orphan-right">
              <img src={widow} alt="Support initiative" className="orphan-img" />
            </div>
            {/* Center image */}
            <img src={flower} alt="Orphan with supplies" className="flower-img" />
  
            {/* Left side text */}
            <div className="orphan-left">
              <h2>
                Widows Empowerment Fund</h2>
              <p>
                Widows are pillars of their families. We restore stability by helping them rebuild their confidence and income through small, accessible micro-loans giving them the support they need to start or grow small businesses. These opportunities open the door to long-term security, allowing women to regain financial independence, provide for their children, and create brighter futures. With each empowered widow, communities become stronger, more resilient, and full of possibility.
              </p>
              <button className="explore-btn">EXPLORE ORPHAN SUPPORT</button>
            </div>
          </div>
            <section className="newsletter">
        <div className="newsletter__left">
          <h2 className="newsletter__heading">STAY CURRENT & CONNECTED</h2>
        </div> <div className="newsletter__right">
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First Name *</label>
                <input id="firstName" type="text" />
              </div> <div className="form-field">
                <label htmlFor="lastName">Last Name *</label>
                <input id="lastName" type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address *</label>
                <input id="email" type="email" />
              </div>
            </div>
            <p className="newsletter__disclaimer"> By signing up, you'll receive the All Hands & Hearts newsletter. </p>
            <button type="submit" className="newsletter__btn">SUBSCRIBE</button>
          </form>
        </div>
      </section>
      <Footer/>

  </>
  )
}

export default ActiveProgramm