import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import donate from "../images/partner.jpg"
import support from "../images/proven.jpg"
import flower from "../images/hands.png"
import Footer from '../Components/Footer'
const faqItems = [{
    title: "Donate Once Online",
    description: "Donate a one-time amount and create an instant impact.",
},
{
    title: "Donate Monthly",
    description:"You can cast a positive impact on the community by making check donations. This can be done by mailing your check payable to: AKAFI, 1255 Union Street NE, 7th Floor, Washington, DC 20002"
},
{
    title: "By Check",
    description:"Donation can be made by ACH or wire transfer using the following banking details:"
},
{
    title: "Bank or Stock Transfer",
     description:"DAF Direct enables you to send funds from your donor-advised fund directly to AKAFI with no administration or transaction fees. Ensure your donations by using our EIN: 93-2604854."
},
{
    title: "Donor Advised Funds",
    description:"You can also donate in cryptocurrency. This offers a secure and tax-efficient way to help the community."
},
{
    title: "Cryptocurrency",
    description:"Impact positively by a fundraiser. Turn moments into opportunities and transform lives. "
},

];

function Partner() {
      const [activeIndex, setActiveIndex] = useState(null); const toggleItem = (index) => { setActiveIndex(activeIndex === index ? null : index); };
  return (
    <>
    <Navbar/>
           <section className="hope-builder" aria-labelledby="hope-builder-title">
                    <div className="hope-builder__container">
                        <div className="hope-builder__content">
                            <h2 id="hope-builder-title" className="hope-builder__title">
                                Partner with AKAFI To Boost The Impact
                                </h2>
                            <p className="hope-builder__description">
                                Your monthly donations serve as a foundation for sustainability.
                                This has a crucial impact on promoting education. With sustainable
                                programs, we encourage widows and help them achieve financial stability.
                                Our support and programs enable the community to thrive. Join us to turn
                                compassion into consistent action with our monthly-giving family.
                            </p>
                        </div>
                        <div>
                            <img className="hope-builder__image" src={donate} alt="Community members standing together" loading="lazy" />
                        </div>
                    </div>
                </section>
                      <section className="approach-section">
                <h2 className="approach-heading">
                 Why Partner with AKAFI?</h2>
                 <strong>A Partnership Built on Trust and Tangible Results</strong>
                <p className="approach-subtext">
                  Body Text: At AKAFI, we believe that the most profound change happens when we work together. We offer more than just a donation receipt; we offer a genuine, transparent partnership. Your organization can directly witness the impact of its support, from the smile of a child in a new uniform to the thriving business of a widow achieving financial freedom.
                </p>
               
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
                                    <h2>
                                        Proven, Scalable Model</h2>
                                    <p> When a child loses their parents, access to education becomes uncertain. 
                                        <strong> AKAFI </strong>
                                         ensures orphans receive school uniforms, shoes, and learning materials 
                                          restoring confidence, dignity, and the opportunity to stay in school. 
                                          We have a clear, focused strategy in education, women’s empowerment, and community development. Our impact is documented, with over 150 orphans supported and 1,700+ women empowered to date.
                                         </p>
                                  
                                  </div>
                                </div>
                                <section className="ways-to-give" aria-labelledby="ways-to-give-title"> <div className="ways-to-give__container"> 
                                    <h2 id="ways-to-give-title" className="ways-to-give__heading">Financial Support </h2>
                                     <ul className="ways-to-give__list"> 
                                        {faqItems.map((item, index) => ( 
                                        <li key={index} className={`ways-to-give__item ${ activeIndex === index ? "active" : "" }`} > <button className="ways-to-give__toggle" onClick={() => toggleItem(index)} aria-expanded={activeIndex === index} > <span className="ways-to-give__title">{item.title}</span> <span className="ways-to-give__arrow"> {activeIndex === index ? "▲" : "▼"} </span> </button> {item.description && activeIndex === index && ( <div className="ways-to-give__content"> <p>{item.description}</p> </div> )} </li> ))} </ul> </div> </section>
   <section className="contact-form" aria-labelledby="contact-form-title">
      <div className="contact-form__container">
        {/* Left Side Text */}
        <div className="contact-form__text">
          <h2 id="contact-form-title" className="contact-form__heading">
            LET'S TALK
          </h2>
          <p className="contact-form__paragraph">
            Partner with AKAFl to uplift underserved communities, empower families, and create long-term change.
          </p>
          <p className="contact-form__paragraph">
            Your support helps us provide education, healthcare, nourishment, and sustainable opportunities where they are needed most.
          </p>
          <p className="contact-form__paragraph">
            Together, we can build brighter, stronger futures one program, one child, and one community at a time.
          </p>
        </div>

        {/* Right Side Form */}
        <form className="contact-form__form">
          <input type="text" name="firstName" placeholder="First Name" className="contact-form__input" />
          <input type="email" name="email" placeholder="Email Address" className="contact-form__input" />
          <textarea name="message" placeholder="Message" className="contact-form__textarea" rows="4" ></textarea>
          <button type="submit" className="contact-form__button">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Partner