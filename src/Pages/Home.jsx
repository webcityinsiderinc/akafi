import React from "react";
import Navbar from "../Components/Navbar";
import HeroSlider from "../Components/HeroSlider";
import img1 from "../images/charity-watch-logo.webp"
import img2 from "../images/400_design_Charity_Navigator_Logo_2023-300x300-1.webp"
import img3 from "../images/candid-seal-platinum-2025.webp"
import videoFile from "../images/video.mp4";
import ProgramsCarousel from "../Components/ProgramsCarousel";
import Cards from "../Components/Cards";
import support from "../images/orphan-support.jpg"
import flower from "../images/flower-line.png"
import arrow from "../images/arrow.png"
import women from "../images/women-empowerment.jpg"
import widow from "../images/widows-fund.jpg"
import Footer from "../Components/Footer";

const Home = () => {
  const cards = [
    { title: "Donate", hoverText: "Support financially" },
    { title: "Volunteer", hoverText: "Join our team" },
    { title: "Partner With Us", hoverText: "Collaborate for impact" }
  ];
  return (
    <>
      <Navbar />
      <HeroSlider />
      <div className="container">
        <div className="reco-wrapper mb-3">
          <p>Recognized By</p>
          <div className="reco-images">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />

          </div>
        </div>
      </div>
      <section className="video-section">
        <div className="container-fluid">
          {/* RIGHT VIDEO */}
          <div className="video-content">
            <video src={videoFile} autoPlay loop muted playsInline />
          </div>
          {/* LEFT TEXT */}
          <div className="text-content">
            <h2>
              Empowering Education, Transforming Lives, And Building Future
            </h2>
            <p>
              Each day, hundreds of bright souls suffer to survive. These include
              young minds struggling for their education or the widows suffering
              in their lives. The unserved community aspires for a ray of hope.
            </p>
            <p>
              Introducing <strong>Alagi Kebba & Aja Fatou (AKAFI)</strong>, a
              shelter for the needy, a refuge for the community, and your partner
              to bring change, transform lives, and build a future.
            </p>
            <p className="read-more">
             <a href="/story-mission">Read How a Story of Survival Became a Mission &rarr;</a>
            </p>
          </div>
        </div>
      </section>
      <ProgramsCarousel />
      <div className="container-fluid">
        <div className="suporting-orphans-wrapper">
          <h2>Impacting Lives And Supporting Orphans, Widows, And Unserved Communities</h2>
          <div className="supporting-bg-wrapper">
            <div className="see-btn">
              <a className="see-btn" href="our-impact">SEE OUR IMpACT</a>
              </div>
          </div>
        </div>
        <Cards />
      </div>
      <div className="conatiner">
        <div className="support-create-wrapper">
          <h2>Where Your Support</h2>
          <h2>Creates Miracles</h2>
          <p>A mishap changed life in seconds. The sudden death of one’s loved one, supporting your finances, or any other
          </p>
          <p>incident. But it throws a person into the blind well of struggle. </p>
          <p>We are AKAFI, the hope to orphans, widows, and the community. Through education to the orphans,</p>
          <p>sustainable programs for the widows, and the development innitiatives for the community, we bring change</p>
          <p>and transform lives.</p>
          <button className="see-btn"><a href="orphan-support-programm">Explore Our Work</a></button>
        </div>
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
                      <button className="explore-btn"><a href="orphan-support-programm">EXPLORE ORPHAN SUPPORT</a></button>

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
            <button className="explore-btn"><a href="orphan-support-programm">EXPLORE ORPHAN SUPPORT</a></button>
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
            <button className="explore-btn"><a href="orphan-support-programm">EXPLORE ORPHAN SUPPORT</a></button>
          </div>
        </div>
      </div>
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
  );
};

export default Home;
