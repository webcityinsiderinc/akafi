import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

const faqs = [ { question: 'How does the orphan support program work?', answer: 'We provide uniforms, shoes, and school supplies to ensure orphans can attend school with dignity.', }, { question: 'What kind of support do widows receive?', answer: 'Widows receive micro-grants and small business tools to help them rebuild financial independence.', }, { question: 'How do community gardens help families?', answer: 'Gardens provide seeds, fertilizers, and tools so families can grow food and improve nutrition.', }, ];
function Donate() {
    const toggleFaq = (index) => { setOpenIndex(openIndex === index ? null : index); };
    const [openIndex, setOpenIndex] = useState(null);
    
  return (
    <>
<Navbar/>
<section className="donate-section donate-hero">
     <div className="donate-overlay">
         <div className="donate-left"> 
            <h1 className="donate-heading">Donate</h1>
             <p className="donate-description"> 
               Your support or a little donation has the power of transformation. What matters to you a little could matter a lot for the underserved families. Let’s take the little steps that would cause a big impact for orphans and widows or the underresourced community. 

With dignity and compassion, we strive to transform their lives and contribute to community.
                </p>
                  <button className="donate-btn">SUPPORT URGENT RELIEF</button>
                   </div> 
                   </div> 
                   </section>
                   <section className="faq-section"> <div className="faq-left"> <h2 className="faq-heading">FAQ</h2> </div> <div className="faq-right"> {faqs.map((faq, index) => ( <div key={index} className="faq-item" onClick={() => toggleFaq(index)} > <div className="faq-question"> {faq.question} <span className="faq-icon">{openIndex === index ? '−' : '+'}</span> </div> {openIndex === index && ( <div className="faq-answer"> <p>{faq.answer}</p> </div> )} </div> ))} </div> </section>
 
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

export default Donate