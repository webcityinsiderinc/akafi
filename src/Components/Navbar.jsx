import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaChevronDown } from "react-icons/fa";
import drop from "../images/drop-img.jpg"

const Navbar = () => {
 const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {   // 50px scroll ke baad
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`navbar-wrapper ${scroll ? "scrolled" : ""}`}>
      <div className="nav-wrapper">

        {/* LEFT */}
        <div className="nav-left">
          <div className="logo">AKAFI</div>

          <ul className="menu">
            <li>Home</li>

            {/* OUR WORK */}
            <li className="dropdown">
              <span>Our Work <FaChevronDown /></span>

              <div className="dropdown-menu work-dropdown">
                <ul className="work-list">
                  <li>Active Programs</li>
                  <li>Orphan Support Programs</li>
                  <li>Women’s Community Gardens</li>
                  <li>Widows Empowerment Fund</li>
                </ul>

                <div className="work-cards">
                  <div className="card">
                    <img src={drop} alt="" />
                    <div className="card-text-wraper">
                        <h6>Women Gardens</h6>
                        <p>providing school uniforms,</p>
                    </div>
                  </div>
                  <div className="card">
                     <img src={drop} alt="" />
                    <div className="card-text-wraper">
                        <h6>Women Gardens</h6>
                        <p>providing school uniforms,</p>
                    </div>
                  </div>
                  <div className="card">
                  <img src={drop} alt="" />
                    <div className="card-text-wraper">
                        <h6>Women Gardens</h6>
                        <p>providing school uniforms,</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* OTHER DROPDOWNS */}
            <li>
              <span>Our Impact</span>
            </li>

            <li className="dropdown">
              <span>Take Action <FaChevronDown /></span>
              <ul className="dropdown-menu simple">
                <li>Donate</li>
                  <li>Donate Monthly</li>
                  <li>Ways To Give</li>
                  <li>Partner With Us</li>
                <li>Volunteer</li>
              </ul>
            </li>

            <li className="dropdown">
              <span>About Us <FaChevronDown /></span>
              <ul className="dropdown-menu simple">
                <li>Who We Are</li>
                <li>Contact</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <button className="volunteer">Volunteer</button>
          <button className="donate">Donate</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
