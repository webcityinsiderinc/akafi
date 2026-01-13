import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import heroVideo from "../images/our-work.mp4"
import support from "../images/orphan-support.jpg"
import flower from "../images/flower-line.png"
import arrow from "../images/arrow.png"
import women from "../images/women-empowerment.jpg"
import widow from "../images/widows-fund.jpg"
import Footer from '../Components/Footer'


const data = {
    Cyclone: [
        { title: "Hawaii Relief – Tropical Storm Lane", location: "Hawaii", date: "August 2018 – September 2018" },
        { title: "Mozambique Tropical Cyclone Relief", location: "Mozambique", date: "November 2019 – March 2020" },
        { title: "Hawaii Relief – Tropical Storm Iselle", location: "Oahu, Hawaii", date: "August 2014 – August 2014" }
    ],
    Flooding: [
        { title: "Florida Flood Relief", location: "Broward County, Florida", date: "June 2024 – June 2024" },
        { title: "California Flood Relief", location: "California", date: "January 2023 – February 2024" },
        { title: "Iowa Relief – Cedar Rapids Flood Response", location: "Cedar Rapids", date: "June 2008 – October 2008" }
    ],
    Hurricane: [
        { title: "North Carolina Hurricane Helene Relief", location: "Asheville, North Carolina", date: "September 2024" },
        { title: "California Hurricane Hilary Relief", location: "California", date: "August 2023 – September 2023" },
        { title: "Florida Hurricane Michael Relief", location: "Florida", date: "October 2018 – March 2021" }
    ],
    Tornado: [
        { title: "Arkansas Tornado Relief", location: "Arkansas", date: "July 2023 – December 2023" },
        { title: "Florida Tornado Relief", location: "Crystal River, Florida", date: "October 2023 – October 2023" },
        { title: "Nebraska Tornado Relief", location: "Elkhorn, Nebraska", date: "April 2024 – April 2024" }
    ]
};

const programs = {
    Orphan:
    {
        image: support,
        title: "Caring for Vulnerable Children With Dignity",
        challenge: "Many orphans in The Gambia lack basic necessities such as clothing, shoes, hygiene items, and daily essentials. Without proper support, their confidence and emotional well-being are deeply affected.",
        response: "AKAFI identifies the most vulnerable children through guardians and community leaders. We provide clothing, shoes, hygiene kits, and essential daily-use items to help them live with dignity and stability.",
        change: "Children feel supported, cared for, and confident. Families experience relief knowing their children have access to the essentials they need to grow and thrive."
    },
    Women:
    {
        image: women,
        title: "Empowering Women Through Community Gardens",
        challenge: "Women face limited access to land, tools, and training for sustainable agriculture.",
        response: "AKAFI provides garden plots, seeds, and training to help women grow food and income.",
        change: "Women gain independence, feed their families, and build community resilience."
    },
    Widows:
    {
        image: widow,
        title: "Supporting Widows Toward Financial Independence",
        challenge: "Widows often lack financial support and face social exclusion.",
        response: "AKAFI offers vocational training, microgrants, and peer support networks.",
        change: "Widows build confidence, earn income, and regain dignity."
    }
};
  const cards = [
    { title: "Donate", hoverText: "Support financially" },
    { title: "Volunteer", hoverText: "Join our team" },
    { title: "Partner With Us", hoverText: "Collaborate for impact" }
  ];
function OurWork() {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Orphan"); const { image, title, challenge, response, change } = programs[activeTab];
    return (
        <>
            <Navbar />
            <div className="our-work-hero">
                <video className="hero-video" src={heroVideo} autoPlay loop muted />
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Our Work</h1>
                </div>
            </div>
            <section className="program-history">
                <div className="history-header" onClick={() => setOpen(!open)}>
                    <h2>Program History List View</h2>
                    <span className={`arrow ${open ? "open" : ""}`}>▸</span>
                </div>
                <div className="header-border"></div>
                {open && (<div className="history-body">
                    <div className="grid-row"> {Object.entries(data).map(([category, items]) => (<div className="grid-box" key={category}>
                        <h3>{category}</h3>
                        {items.map((item, i) => (
                            <div className="item" key={i}>
                                <h4>{item.title}</h4>
                                <p>{item.location}</p>
                                <span>{item.date}</span>
                            </div>
                        ))}
                    </div>
                    ))}
                    </div>
                </div>
                )}
            </section>
            <section className="active-programs">
                <div className="left">
                    <h2>OUR WORLD IS CHANGING.<br />OPPORTUNITY IS NOT.</h2>
                    <button className="cta-btn">SEE ALL ACTIVE PROGRAMS</button>
                </div>
                <div className="right">
                    <p> AKAFI walks alongside these communities, listening first, then responding with practical
                        programs that remove barriers to education and build paths toward financial independence.
                        Our work focuses on the people who are most often left out: orphans, women, and widows.
                    </p>
                </div>
            </section>
            <section className="approach-section">
                <h2 className="approach-heading">
                    FROM SUPPORT TO <br></br>INDEPENDENCE: OUR THREE <br></br>PART APPROACH </h2>
                <p className="approach-subtext">
                    AKAFI's work follows a simple but powerful path.<br></br> We help families stabilize,
                    grow, and thrive. </p>
            </section>
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
            <section className="change-message">
                <div className="change-content">
                    <h2>CHANGE SHOULD NOT TAKE A LIFETIME.</h2>
                    <button className="cta-btn">SEE ALL ACTIVE PROGRAMS</button>
                </div>
            </section>
            <section className="program-tabs"> 
                <div className="tabs">
                     {Object.keys(programs).map((key) =>   ( 
                        <button key={key} className={`tab-btn ${activeTab === key ? "active" : ""}`} 
                        onClick={() => setActiveTab(key)} >
                             {key === "Orphan" ? "Orphan Support Program" : key === "Women" ? "Women’s Community Gardens" : "Widows Empowerment Fund"} 
                             </button> 
                            ))}
                             </div> 
                             <div className="tab-content"> 
                                <img src={image} alt={activeTab} className="tab-image" />
                                  <div className="tab-text"> 
                                    <h3>{title}</h3>
                                    <div>
                                         <strong>Community challenge</strong> 
                                         <p>{challenge}</p> </div> <div> <strong>AKAFI’s response</strong> <p>{response}</p> </div> <div> <strong>What changed</strong> <p>{change}</p> </div> </div> </div> </section>
                                             <div className="changemaker-section">
        <h2 className="changemaker-heading">BE A CHANGEMAKER</h2>

        <div className="changemaker-cards">
          {cards.map((card, index) => (
            <div className="changemaker-card" key={index}>
              <div className="card-content">
                <span className="card-title">{card.title}</span>
                <span className="card-arrow">→</span>
                <span className="hover-text">{card.hoverText}</span>
              </div>
            </div>
          ))}
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

export default OurWork