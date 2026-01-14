import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import programm from "../images/women.jpg"
import edu from "../images/gurdain.jpg"
import { FaStar } from "react-icons/fa";
import img1 from "../images/active-img-1.jpg"
import img2 from "../images/active-img-2.jpg"
import img3 from "../images/active-img-3.jpg"
import video from "../images/our-work.mp4"
import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.jpg"
import slide3 from "../images/slide3.jpg"
import Footer from '../Components/Footer'

const images = [slide1, slide2, slide3];

const cards = [
    { title: "Donate", hoverText: "Support financially" },
    { title: "Volunteer", hoverText: "Join our team" },
    { title: "Partner With Us", hoverText: "Collaborate for impact" }
];

function WidowsFund() {
        const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
          <Navbar />
               <div className="orphan-support-programm-wrapper">
                   <section className="orphan-section">
                       <div className="orphan-content">
                           <h2 className="orphan-heading">WIDOWS EMPOWERMENT FUND</h2>
                           <p className="orphan-text">
                             Many widows face overwhelming financial pressure as they work to support their families alone. With limited resources and very few opportunities, even a small amount of support can transform their entire future.
                           </p>
                           <p className="orphan-text">
                               AKAFI’s Widows Empowerment Fund provides micro-grants, training, and resources that help widows start small businesses, generate stable income, and regain independence.
This program restores dignity, strengthens families, and builds financial confidence for women who need it most.
                           </p>
                           <button className="orphan-button">SUPPORT URGENT RELIEF</button>
                       </div>
   
                       <div className="orphan-image-wrap">
                           <img src={programm} alt="Orphan Support" className="orphan-image" />
                       </div>
                   </section>
   
               </div>
               <section className="orphan-row">
                   <div className="orphan-col orphan-col--left">
                       <img className="orphan-image" src={edu} alt="Education support classroom" />
                   </div>
                   <div className="orphan-col orphan-col--right">
                       <h3 className="orphan-title">Why Widow Support Matters</h3>
                       <p className="orphan-intro">Supporting women through agriculture creates long-term stability because it:
                       </p>
                       <ul className="orphan-bullets">
                           <li>Provides reliable food for families in low-income communities</li>
                           <li>Keeps vulnerable children safe from early labor, exploitation, or dropping out.</li>
                           <li>Ensures equal access to education regardless of family income.</li>
                           <li>Helps families relieve the financial burden of schooling.</li>
                           <li>Encourages long-term growth by giving children a foundation for success.</li>
                           <li>Creates opportunities for children to dream bigger and pursue a better future.</li>
                       </ul>
                   </div>
               </section>
               <div className="child-wrapper-section">
                   <section className="orphan-support">
                       <div className="container">
   
                           {/* LEFT */}
                           <div className="left">
                               <h2>
                                  Helping Women Build Independence
   
                               </h2>
   
                               <p>
                                   Empowering Communities Through Agriculture
                               </p>
                           </div>
   
                           {/* RIGHT */}
                           <div className="right">
   
                               <div className="box">
                                   <FaStar />
                                   <div>
                                       <h4>Uniforms & Footwear for Dignity</h4>
                                       <p>
                                           A school uniform is often the only requirement preventing an
                                           orphan from returning to school. We provide two high-quality
                                           uniforms and a pair of shoes for every child we support.
                                       </p>
                                   </div>
                               </div>
   
                               <div className="box">
                                   <FaStar />
                                   <div>
                                       <h4>Community-Driven Support System</h4>
                                       <p>
                                           We work directly with guardians, teachers, and community leaders
                                           to identify needs and ensure each child is supported.
                                       </p>
                                   </div>
                               </div>
   
                               <div className="box">
                                   <FaStar />
                                   <div>
                                       <h4>Complete School Supply Kits</h4>
                                       <p>
                                           Each kit includes notebooks, pencils, pens, backpacks, and
                                           learning materials so children can fully participate.
                                       </p>
                                   </div>
                               </div>
   
                               <div className="box">
                                   <FaStar />
                                   <div>
                                       <h4>Long-Term Monitoring</h4>
                                       <p>
                                           Our team regularly checks in with families and schools to ensure
                                           children remain enrolled and supported.
                                       </p>
                                   </div>
                               </div>
   
                               <div className="box">
                                   <FaStar />
                                   <div>
                                       <h4>Nutrition Support Through Gardens</h4>
                                       <p>
                                           Community gardens indirectly support orphans by improving
                                           household stability and access to meals.
                                       </p>
                                   </div>
                               </div>
   
                               <div className="box">
                                   <FaStar />
                                   <div>
                                       <h4>Health, Hygiene & Ongoing Support</h4>
                                       <p>
                                           We teach hygiene habits and work with families and teachers to
                                           keep children healthy and in school.
                                       </p>
                                   </div>
                               </div>
   
                               <div className="box">
                                   <FaStar />
                                   <div>
                                       <h4>Hygiene & Health Awareness</h4>
                                       <p>
                                           Proper hygiene practices reduce absenteeism and help children
                                           grow with confidence.
                                       </p>
                                   </div>
                               </div>
   
                           </div>
                       </div>
                   </section>
               </div>
               <section className="video-section">
                   <h2>Faces of Impact</h2>
   
                   <div className="video-wrapper">
                       <video
                           src={video}
                           controls
                           autoPlay
                           muted
                           loop
                       />
                   </div>
               </section>
               <section className="image-hover-section">
                   <div className="image-row">
   
                       <div className="image-card">
                           <img src={img1} alt="Education Support" />
                           <div className="overlay">
                               <h4>Education Support</h4>
                               <p>
                                   Awa lost both parents at a young age and spent months staying home because her guardians couldn’t afford uniforms or supplies. With support from AKAFI, she received two uniforms, a pair of shoes, and the learning materials she needed to return to school. Today, Awa attends classes confidently, participates actively, and dreams of becoming a nurse who serves her community.
                               </p>
                           </div>
                       </div>
   
                       <div className="image-card">
                           <img src={img2} alt="Women Empowerment" />
                           <div className="overlay">
                               <h4>Women Empowerment</h4>
                               <p>
                                   Supporting women through training, resources, and opportunities
                                   that build independence and confidence.
                               </p>
                           </div>
                       </div>
   
                       <div className="image-card">
                           <img src={img3} alt="Community Growth" />
                           <div className="overlay">
                               <h4>Community Growth</h4>
                               <p>
                                   Mariama lives with her elderly grandmother, who struggled to provide for her after the loss of her parents. AKAFI stepped in with full educational support — uniforms, a backpack, notebooks, and pencils. Mariama now walks to school every morning with pride, and her grandmother says it is the first time she has seen her granddaughter so excited to learn.
                               </p>
                           </div>
                       </div>
                   </div>
               </section>
               <section className="simple-slider">
                   <div className="slider-image">
                       <img src={images[activeIndex]} alt="slider" />
                   </div>
   
                   <div className="dots">
                       {images.map((_, index) => (
                           <span
                               key={index}
                               className={activeIndex === index ? "dot active" : "dot"}
                               onClick={() => setActiveIndex(index)}
                           />
                       ))}
                   </div>
               </section>
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

export default WidowsFund