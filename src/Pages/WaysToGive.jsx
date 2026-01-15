import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import img1 from "../images/charity-watch-logo.webp"
import img2 from "../images/400_design_Charity_Navigator_Logo_2023-300x300-1.webp"
import img3 from "../images/candid-seal-platinum-2025.webp"
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
{
    title: "Fundraise",
    description:'With a lasting legacy, you can support the underserved community. Email us at info@akafi.org or call (612) 497-9515 for legacy giving.'
},
];
const WaysToGive = () => {
    const [activeIndex, setActiveIndex] = useState(null); const toggleItem = (index) => { setActiveIndex(activeIndex === index ? null : index); };
    return (
        <>
            <Navbar />
<section className="ways-to-give" aria-labelledby="ways-to-give-title"> <div className="ways-to-give__container"> <h2 id="ways-to-give-title" className="ways-to-give__heading"> Ways to Give </h2> <ul className="ways-to-give__list"> {faqItems.map((item, index) => ( <li key={index} className={`ways-to-give__item ${ activeIndex === index ? "active" : "" }`} > <button className="ways-to-give__toggle" onClick={() => toggleItem(index)} aria-expanded={activeIndex === index} > <span className="ways-to-give__title">{item.title}</span> <span className="ways-to-give__arrow"> {activeIndex === index ? "▲" : "▼"} </span> </button> {item.description && activeIndex === index && ( <div className="ways-to-give__content"> <p>{item.description}</p> </div> )} </li> ))} </ul> </div> </section>
         <section className="approach-section">
                <h2 className="approach-heading">
                    About Our Work </h2>
                <p className="approach-subtext">
                    At AKAFI, we are committed to empowering underserved communities through education, financial independence, and sustainable development. Guided by our mission to support orphans, widows, and women across The Gambia and beyond, we design programs that reflect the real needs, cultures, and priorities of the people we serve.
                  </p>
                  <p className="approach-subtext">Every community, every challenge, and every success story is unique which is why our work is built on compassion, transparency, and long-term impact. Together with our supporters, we create opportunities that allow families to thrive with dignity and hope.</p>
            </section>
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

export default WaysToGive