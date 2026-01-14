import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import heroVideo from "../images/our-work.mp4"
import img1 from "../images/active-img-1.jpg"
import img2 from "../images/active-img-2.jpg"
import img3 from "../images/active-img-3.jpg"
import video from "../images/our-work.mp4"
import fast from "../images/face-impact.jpg"
import Footer from '../Components/Footer'


const cards = [ { id: 1, number: '150+', label: 'Orphans supported with uniforms, shoes, and school essentials', detail: 'We ensure every orphan receives two uniforms, shoes, and basic school supplies to return to class with dignity.', }, { id: 2, number: '100+', label: 'Widows supported with micro-grants and small-business tools', detail: 'Micro-grants and toolkits help widows launch small businesses and regain financial independence.', }, { id: 3, number: '7,000+', label: 'Seed packets distributed to families to improve nutrition', detail: 'Seed kits empower families to grow vegetables at home, improving food security and household health.', }, { id: 4, number: 'Community Gardens', label: 'Through community gardens, women receive seeds, fertilizers, and farming tools.', detail: 'Gardens help women grow food, support families, and build financial independence.', }, ];

const bullets = [ { title: "A child’s confidence restored", text: "New uniforms and shoes help orphans walk into school with dignity, feeling seen, supported, and ready to learn.", }, { title: "A mother growing her future", text: "Community gardens provide women with the tools to feed their families and earn reliable income through fresh produce.", }, { title: "A widow rebuilding her life", text: "Small business grants give widows the opportunity to provide stability for their children and regain financial independence.", }, { title: "A community strengthened through hope", text: "Every seed, every grant, every uniform creates a ripple of progress that uplifts entire neighborhoods for years to come.", }, ];
function OurImpact() {
  const [activeId, setActiveId] = useState(null); const renderCard = (card) => ( <div key={card.id} className={`impact-card ${activeId === card.id ? 'active' : ''}`} onClick={() => setActiveId(card.id)} > {activeId !== card.id ? ( <> <h3 className="impact-number">{card.number}</h3> <p className="impact-label">{card.label}</p> </> ) : ( <div className="impact-detail fade-up"> <button className="impact-close" onClick={(e) => { e.stopPropagation(); setActiveId(null); }} > × </button> <p>{card.detail}</p> </div> )} </div> );

  return (
    <>
    <Navbar/>
     <div className="our-work-hero">
                    <video className="hero-video" src={heroVideo} autoPlay loop muted />
                    <div className="overlay"></div>
                    <div className="hero-content">
                        <h1>Our Impact</h1>
                    </div>
                </div>
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
           <section className="impact-layout"> {/* Row 1: col-8 + col-4 */} <div className="impact-row"> <div className="impact-col col-8">{renderCard(cards[0])}</div> <div className="impact-col col-4">{renderCard(cards[1])}</div> </div> {/* Row 2: col-4 + col-8 */} <div className="impact-row"> <div className="impact-col col-4">{renderCard(cards[2])}</div> <div className="impact-col col-8">{renderCard(cards[3])}</div> </div> </section>
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
<section className="faces-section">
      <div className="faces-left">
        <img src={fast} alt="Faces of Impact" className="faces-image" />
      </div>

      <div className="faces-right">
        <h2 className="faces-title">Faces of Impact</h2>
        <ul className="faces-list">
          {bullets.map((item, idx) => (
            <li key={idx} className="faces-item">
              <span className="faces-star">★</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
 <section className="approach-section">
                <h2 className="approach-heading">
                    About Our Work </h2>
                <p className="approach-subtext">
                   At AKAFI, we stay committed to uplifting underserved communities through education, empowerment, and sustainable development. Guided by our mission to support orphans, widows, and families, we design programs tailored to real needs, cultures, and priorities.
No two communities are the same which is why every AKAFI initiative is built with compassion, transparency, and long-term impact at its core. </p>
            </section>
            <section className="impact-section impact-hero"> <div className="impact-overlay"> 
                <h1 className="impact-heading">
                Make Your Impact
                </h1> 
                <div className="impact-buttons"> <button className="impact-btn">Support Now</button> <button className="impact-btn impact-btn--outline">Learn More</button> </div> </div> </section>
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

export default OurImpact