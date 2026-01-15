import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import impact from "../images/make-impct.jpg"
import Footer from '../Components/Footer';

const messages = [
    "Here to Help",
    "Empowering Communities",
    "Creating Change",
    "Uplifting Lives",
];

const values = [ { label: "Urgent", description: "We respond quickly to meet the urgent needs of impacted communities, ensuring that our actions are guided by the priorities and leadership of those we serve.", }, { label: "Human", description: "We center humanity in everything we do—listening, respecting, and uplifting the voices of those we serve.", }, { label: "Unique", description: "We embrace the uniqueness of every community, tailoring our support to meet specific needs and cultural contexts.", }, { label: "Unstoppable", description: "We persist through challenges, driven by purpose and the belief that change is always possible.", }, { label: "Authentic", description: "We lead with honesty, transparency, and a deep commitment to staying true to our mission.", }, ];
function StoryMission() {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const currentMessage = messages[currentMessageIndex];

        if (charIndex < currentMessage.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + currentMessage[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);

            // ✅ cleanup return
            return () => clearTimeout(timeout);
        } else {
            const pause = setTimeout(() => {
                setDisplayedText("");
                setCharIndex(0);
                setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
            }, 2000);

            // ✅ cleanup return
            return () => clearTimeout(pause);
        }
    }, [charIndex, currentMessageIndex]);
    const cards = [
    { title: "Donate", hoverText: "Support financially" },
    { title: "Volunteer", hoverText: "Join our team" },
    { title: "Partner With Us", hoverText: "Collaborate for impact" }
];

    return (
        <>
            <Navbar />
            <section className="hero-section"> <div className="hero-section__container"> <h2 className="hero-section__subtitle">Story & Mission</h2> <h1 className="hero-section__title">We Are</h1> <div className="hero-section__animated-text">{displayedText}</div> </div> </section>
            <section className="mission-section"> <div className="mission-section__container">
                {/* Left Text */} <div className="mission-section__text">
                    <h2 className="mission-section__heading">FROM SURVIVAL TO MISSION</h2>
                    <p> Those experiences left an unforgettable imprint and planted the seed for a mission much bigger than any single moment. Out of those defining experiences, AKAFI was created with one purpose: to uplift vulnerable communities through education, nourishment, and long-term, sustainable support. </p> <p> Starting with small initiatives to provide school supplies and nutritional support, AKAFI quickly expanded into structured programs that address the most critical needs from food insecurity and school retention to widow empowerment and orphan support. </p> <p> As our reach grew, so did our responsibility. Community leaders, families, and volunteers joined this mission, helping us bring dignity, stability, and opportunity to people who had been left without reliable resources for far too long. </p> <p> Today, AKAFI stands as a trusted nonprofit organization dedicated to building pathways of hope not through momentary relief, but through school-focused support, community programs, and empowerment initiatives that create lasting impact. </p> </div> {/* Right Image */} <div className="mission-section__image-wrapper">
                    <img src={impact} alt="AKAFI community support event" className="mission-section__image" />
                </div> </div> </section>
            <section className="mission-vision">
                <div className="mission-vision__container">
                    <h3 className="mission-vision__label">Our Mission</h3>
                    <h2 className="mission-vision__title">
                        KEEPING CHILDREN IN SCHOOL & COMMUNITIES STRONG. </h2>
                    <div className="mission-vision__vision">
                        <h4 className="mission-vision__vision-label">Vision</h4>
                        <p className="mission-vision__vision-text"> Through education,
                            nourishment, health awareness, and sustainable support programs,
                            we work to ensure that every child, widow, and family has access
                            to the tools they need to grow, learn, and thrive. </p> </div>
                </div> </section>
<section className="values-tabs"> <div className="values-tabs__container"> <h2 className="values-tabs__heading">Values</h2> <div className="values-tabs__nav"> {values.map((item, index) => ( <button key={index} className={`values-tabs__tab ${ activeIndex === index ? "active" : "" }`} onClick={() => setActiveIndex(index)} > {item.label} </button> ))} </div> <div className="values-tabs__content"> <p>{values[activeIndex].description}</p> </div> </div> </section>
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

export default StoryMission