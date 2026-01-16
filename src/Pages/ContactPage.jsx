import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function ContactPage() {
  return (
    <>
    <Navbar/>
    <section className="contact-page">
      <div className="contact-grid">
        {/* LEFT SIDE */}
        <div className="info-section">
          <div className="info-block">
            <h3>AKAFI – United States (Head Office)</h3>
            <p>1255 Union Street NE, 7th Floor<br />Washington, DC 20002</p>
            <p>Phone: (612) 497-9515</p>
            <p>Email: info@akafi.org</p>
            <p>Website: www.akafi.org</p>
          </div>

          <div className="info-block">
            <h3>AKAFI – Minnesota Chapter</h3>
            <p>Serving communities across Minneapolis & St. Paul</p>
            <p>Phone: (612) 497-9515</p>
            <p>Email: info@akafi.org</p>
          </div>
          <div className="info-block">
            <h3>AKAFI Orphan Support Centers</h3>
            <p>Partner schools across The Gambia where AKAFI provides:</p>
            <ul>
              <li>Uniforms</li>
              <li>Shoes</li>
              <li>School supplies</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>AKAFI International Supporters Network</h3>
            <p>Volunteers and partners across the U.S., Canada, and Europe</p>
            <p>Helping expand AKAFI’s mission of education and empowerment.</p>
          </div>
        </div>
        <div className="info-section">
<div className="info-block">
            <h3>AKAFI – The Gambia (Regional Office)</h3>
            <p>Serekunda, The Gambia</p>
            <p>Supporting orphans, widows & community garden projects</p>
            <p>Phone: +220 (to be added by client)</p>
            <p>Email: info@akafi.org</p>
          </div>

          <div className="info-block">
            <h3>AKAFI Community Garden Sites</h3>
            <p>Multiple locations across:</p>
            <ul>
              <li>Serekunda</li>
              <li>Wellingara</li>
              <li>Latrikunda</li>
              <li>Brikama</li>
            </ul>
            <p>These sites empower women through agriculture & food security programs.</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="form-section">
          <h3>Contact Form</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Topic" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  )
}

export default ContactPage