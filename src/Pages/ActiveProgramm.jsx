import React from 'react'
import Navbar from '../Components/Navbar'
import support from "../images/orphan-support.jpg"
import flower from "../images/flower-line.png"
import arrow from "../images/arrow.png"
import women from "../images/women-empowerment.jpg"
import widow from "../images/widows-fund.jpg"
import Footer from '../Components/Footer'
import img1 from "../images/active-img-1.jpg"
import img2 from "../images/active-img-2.jpg"
import img3 from "../images/active-img-3.jpg"

const programs = [
  {
    date: "Nov 2025",
    title: "Orphan Support Program",
    location: "The Gambia",
    desc:
      "AKAFI provides school uniforms, shoes, and essential learning materials to help orphans return to school with dignity. This program restores confidence, protects vulnerable children, and ensures they remain in safe classrooms where they can grow and dream…",
  image: img1,
    },
  {
    date: "Nov 2025",
    title: "Women’s Community Gardens",
    location: "The Gambia",
    desc:
      "Through seeds, fertilizers, and agricultural training, AKAFI empowers women to grow food for their families and build sustainable income. These gardens strengthen households, improve nutrition, and create long-term stability within the community…...",
    image: img2,
  },
  {
    date: "Nov 2025",
    title: "Widows Empowerment Fund",
    location: "The Gambia",
    desc:
      "AKAFI provides micro-grants and basic business training to help widows start small businesses and regain financial independence. A small opportunity becomes a lifeline uplifting entire families through steady income and renewed hope…",
    image: img3,
  },
];

function ActiveProgramm() {
  return (
  <>
  <Navbar/>
      <section className="hero-section">
        <div className="hero-content">
          <h1>ACTIVE PROGRAMS</h1>
          <p>Explore how you can make a difference by volunteering.</p>
          <button className="hero-btn">VOLUNTEER</button>
        </div>
      </section>
      {/* orphan cards section */}
   <div className="programs">
      <div className="programs-row">
        {programs.map((item, index) => (
          <div className="program-card" key={index}>
            <div className="card-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="card-body p-4">
              <div className="date">
                <span>Nov</span>
                <strong>2025</strong>
              </div>

              <div className="content">
                <h4>{item.title}</h4>
                <h6>{item.location}</h6>
                <p>{item.desc}</p>

                <a href="#" className="learn-more">
                  LEARN MORE <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/*  */}
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