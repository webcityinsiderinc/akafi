import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Left Column */}
        <div className="footer__column footer__contact">
          <h4>Contact & Mailing Information</h4>
          <p>For donations by check, please mail to:</p>
          <p><strong>AKAFI – Administrative Office</strong><br />Los Angeles, CA</p>
          <p>Phone: (612) 497-9515<br />
            Email: <a href="mailto:info@akafi.org">info@akafi.org</a>
          </p>
        </div>

        {/* Center Column */}
        <div className="footer__column footer__links">
          <ul>
          
            <a href="/our-wrok">
              <li>Our Work</li>
            </a>
           <a href="our-impact">
             <li>Our Impact</li>
           </a>
          <a href="active-programm">
              <li>Active Programs</li>
          </a>
           <a href="orphan-support-programm">
             <li>Orphan Support Program</li>
           </a>
            <a href="women-community">
              <li>Women's Community Gardens Program</li>
            </a>
          <a href="widows-fund">
              <li>Widows Empowerment Fund</li>
          </a>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer__column footer__links">
          <ul>
          <a href="/">
              <li>Home</li>
          </a>
            <a href="donate">
              <li>Donate</li>
            </a>
          <a href="contact">
              <li>Contact</li>
          </a>
           <a href="way-to-give">
             <li>Ways To Give</li>
           </a>
          <a href="partner">
              <li>Partner With Us</li>
          </a>
          <a href="volunter">
              <li>Volunteer</li>
          </a>
           
           <a href="donate-monthley">
             <li>Donate Monthly</li>
           </a>
          </ul>
        </div>
      </div>

      {/* Social + Logo */}
      <div className="footer__center">
        <div className="footer__social">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-youtube" /></a>
        </div>
        <div className="footer__logo">AKAFI</div>
      </div>

      {/* Bottom Line */}
      <div className="footer__bottom">
        <p>© 2025 AKAFI. All rights reserved.</p>
        <p>Sponsored By City Insider Inc</p>
      </div>
    </footer>
  );
}
