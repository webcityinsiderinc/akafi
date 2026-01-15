import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; import "swiper/css/navigation";
import img1 from "../images/active-img-1.jpg"
import img2 from "../images/active-img-2.jpg"
import img3 from "../images/active-img-3.jpg"
import "swiper/css/navigation"; import "swiper/css/pagination";
import video from "../images/our-work.mp4"
import Footer from '../Components/Footer';

const slides = [{
     title: "What will I gain by volunteering?",
      description: "By volunteering with us, you will feel a true transformation. We will enable you to work with community members. You will interact with volunteers from different backgrounds. This helps you gain valuable skills. You will also get certificates upon completion.", 
      button: "DONATE MONTHLY",
       image: img1, 
    }, 
    {
         title: "How does volunteering impact others?", 
         description: "Your time and effort directly support families in need. Volunteers help distribute essentials, provide education, and uplift communities. Every action you take creates a ripple of positive change.", 
         button: "JOIN US", 
         image: img2,
         },];
         const cards = [ { id: 1, number: '150+', label: 'Orphans supported with uniforms, shoes, and school essentials', detail: 'We ensure every orphan receives two uniforms, shoes, and basic school supplies to return to class with dignity.', }, { id: 2, number: '100+', label: 'Widows supported with micro-grants and small-business tools', detail: 'Micro-grants and toolkits help widows launch small businesses and regain financial independence.', }, { id: 3, number: '7,000+', label: 'Seed packets distributed to families to improve nutrition', detail: 'Seed kits empower families to grow vegetables at home, improving food security and household health.', }, { id: 4, number: 'Community Gardens', label: 'Through community gardens, women receive seeds, fertilizers, and farming tools.', detail: 'Gardens help women grow food, support families, and build financial independence.', }, ];
const faqs = [{ question: 'How does the orphan support program work?', answer: 'We provide uniforms, shoes, and school supplies to ensure orphans can attend school with dignity.', }, { question: 'What kind of support do widows receive?', answer: 'Widows receive micro-grants and small business tools to help them rebuild financial independence.', }, { question: 'How do community gardens help families?', answer: 'Gardens provide seeds, fertilizers, and tools so families can grow food and improve nutrition.', },];

         function Volunter() {
      const [activeId, setActiveId] = useState(null); const renderCard = (card) => ( <div key={card.id} className={`impact-card ${activeId === card.id ? 'active' : ''}`} onClick={() => setActiveId(card.id)} > {activeId !== card.id ? ( <> <h3 className="impact-number">{card.number}</h3> <p className="impact-label">{card.label}</p> </> ) : ( <div className="impact-detail fade-up"> <button className="impact-close" onClick={(e) => { e.stopPropagation(); setActiveId(null); }} > × </button> <p>{card.detail}</p> </div> )} </div> );
      const toggleFaq = (index) => { setOpenIndex(openIndex === index ? null : index); };
      const [openIndex, setOpenIndex] = useState(null);
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Volunteer With Us</h1>
                    <p>We provide three meals a day, free accommodation, and no program fee to volunteer. Join our volunteer programs and help <br></br>communities recover from disasters—no prior experience needed, just a willingness to help.</p>
                    <button className="hero-btn">VOLUNTEER with us</button>
                </div>
            </section>
            <section className="volunteer-carousel">
                <h2 className='why'>Why Volunteer</h2>
             <Swiper modules={[Navigation, Pagination]} 
             navigation={{ nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev" }}
               pagination={{ el: ".swiper-pagination",
                clickable: true }} 
                loop className="volunteer-carousel__swiper" > 
                {slides.map((slide, index) => ( 
                    <SwiperSlide key={index} className='mb-5'> 
                    <div className="volunteer-carousel__slide">
                         <div className="volunteer-carousel__text"> 
                            <h2 className="volunteer-carousel__title">{slide.title}</h2> 
                            <p className="volunteer-carousel__description">{slide.description}</p> 
                            <button className="volunteer-carousel__button">{slide.button}</button>
                             </div> <div className="volunteer-carousel__image-wrapper"> 
                                <img src={slide.image} alt="Volunteer scene" className="volunteer-carousel__image" />
                                 </div> 
                                 </div> 
                                 </SwiperSlide> 
                                 
                                ))}
                                 </Swiper> 
                                 {/* Custom controls container */} 
                               
                                 <div className="volunteer-carousel__controls"> 
                                    <div className="swiper-button-prev"></div>
                                     <div className="swiper-pagination"></div>
                                      <div className="swiper-button-next"></div>
                                       </div>
            </section>
            <div className="volunter-date-bg mb-5">
           <section className="impact-layout"> {/* Row 1: col-8 + col-4 */} <div className="impact-row"> <div className="impact-col col-8">{renderCard(cards[0])}</div> <div className="impact-col col-4">{renderCard(cards[1])}</div> </div> {/* Row 2: col-4 + col-8 */} <div className="impact-row"> <div className="impact-col col-4">{renderCard(cards[2])}</div> <div className="impact-col col-8">{renderCard(cards[3])}</div> </div> </section>

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
      <section className="faq-section"> <div className="faq-left"> <h2 className="faq-heading">FAQ</h2> </div> <div className="faq-right"> {faqs.map((faq, index) => (<div key={index} className="faq-item" onClick={() => toggleFaq(index)} > <div className="faq-question"> {faq.question} <span className="faq-icon">{openIndex === index ? '−' : '+'}</span> </div> {openIndex === index && (<div className="faq-answer"> <p>{faq.answer}</p> </div>)} </div>))} </div> </section>
   <section className="impact-section impact-hero"> <div className="impact-overlay"> 
                <h1 className="impact-heading">
               BE THE IMPACT
                </h1> 
                <div className="impact-buttons"> <button className="impact-btn">Support Now</button> </div> </div> </section>
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

export default Volunter