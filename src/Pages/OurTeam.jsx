import React from 'react'
import Navbar from '../Components/Navbar'
import img from "../images/awa-kebba-saidy.png"
import img1 from "../images/Baboucarr.jpg"
import img2 from "../images/PeterDjert.png"
import img3 from "../images/Tamsir-Samb.png"
import leadership from "../images/Leadership.webp"
import Footer from '../Components/Footer'

const teamMembers = [{
    name: "Awa Kebba Saidy, Ph.D.",
    title: "Founder and President, AKAFI",
    img: img,
    size: "size-1"
},
{
    name: "Tamsir Ousman Samb",
    title: "Secretary, AKAFI",
    img: img1,
    size: "size-2"
},
{
    name: "Peter Djerf",
    title: "Auditor, AKAFI",
    img: img2,
    size: "size-3"
},
{
    name: "Baboucarr Bojang",
    title: "Officer, AKAFI",
    img: img3,
    size: "size-4"
}];

const directors = [{
    name: "Nate Mook",
    title: "Chief Executive Officer",
    img: leadership
},
{
    name: "Nate Mook",
    title: "Chief Executive Officer",
    img: leadership
}, { name: "Nate Mook", title: "Chief Executive Officer", img: leadership },
{ name: "Nate Mook", title: "Chief Executive Officer", img: leadership },

];


function OurTeam() {

    return (
        <>
            <Navbar />
            <section className="hero-section-our-team">
                <div className="hero-section__container">
                    <h1 className="title">Our Team</h1>
                    <p>Strong Alone, Unstoppable Together</p>
                </div>
            </section>
            <section className="leadership-team"> <h2>Leadership Team</h2> <div className="team-row"> {teamMembers.map((member, index) => (<div key={index} className={`team-card ${member.size}`}> <div className="image-wrapper"> <img src={member.img} alt={member.name} /> </div> <div className="text-wrapper"> <h3>{member.name}</h3> <p>{member.title}</p> </div> </div>))} </div> </section>
            <section className="board-section"> <h2>Board of Directors</h2> <div className="board-row"> {directors.map((director, index) => (<div key={index} className="director-card"> <img src={director.img} alt={director.name} /> <h3>{director.name}</h3> <p>{director.title}</p> </div>))} </div> <div className="below-content"> </div> </section>
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
            <Footer />
        </>
    )
}

export default OurTeam  