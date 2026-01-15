import React from 'react'
import Navbar from '../Components/Navbar'
import donate from "../images/donate-img.jpg"
import video from "../images/our-work.mp4"
import support from "../images/change.jpg"
import flower from "../images/flower-line.png"
import Footer from '../Components/Footer'


function DonateMonthely() {
    return (
        <>
            <Navbar />
            <section className="donate-section donate-hero">
                <div className="donate-overlay">
                    <div className="donate-left">
                        <h1 className="donate-heading">Donate Monthly</h1>
                    </div>
                </div>
            </section>
            <section className="hope-builder" aria-labelledby="hope-builder-title">
                <div className="hope-builder__container">
                    <div className="hope-builder__content">
                        <h2 id="hope-builder-title" className="hope-builder__title">
                            Be A Hope Builder And Create a Change that Lasts:</h2>
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
                    Why “Monthly Donations”?</h2>
                <p className="approach-subtext">
                    One-time donations help the underserved community and feel like a crucial immediate relief. Whereas the monthly donations fuel transformations. It enables our team to stay ahead and plan sustainable programs that create an impact that lasts.
                    A donation that matters!
                </p>
                <p className="approach-subtext">
                    I got the power to create a change. I wanted to find people whom I could really help, who were truly deserving, and finding those was the most challenging task. With AKAFI, I got to know about those people and was able to create a real impact. The best part is I know where my donations are going. So, I can rely on and trust, and can donate more confidently.
                </p>
            </section>
            <section className="video-section mb-4">

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

export default DonateMonthely