import React from "react";
import "./footer.scss";

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
            <li>Our Work</li>
            <li>Our Impact</li>
            <li>Active Programs</li>
            <li>Orphan Support Program</li>
            <li>Women's Community Gardens Program</li>
            <li>Widows Empowerment Fund</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer__column footer__links">
          <ul>
            <li>Home</li>
            <li>Donate</li>
            <li>Contact</li>
            <li>Ways To Give</li>
            <li>Partner With Us</li>
            <li>Volunteer</li>
            <li>Donate Monthly</li>
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
