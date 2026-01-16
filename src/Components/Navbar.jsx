import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaChevronDown } from "react-icons/fa";
import drop from "../images/drop-img.jpg"
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
<div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>


        <ul className={`menu ${menuOpen ? "open" : ""}`}>
            {/* HOME */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {/* OUR WORK */}
            <li className="dropdown">
              <span>
                Our Work <FaChevronDown />
              </span>

              <div className="dropdown-menu work-dropdown">
                <ul className="work-list">
                   <li>
                    <NavLink to="/our-wrok">Our Work</NavLink>
                  </li>
                  <li>
                    <NavLink to="/active-programm">Active Programs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/orphan-support-programm">
                      Orphan Support Programs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-community">
                      Women’s Community Gardens
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/widows-fund">
                      Widows Empowerment Fund
                    </NavLink>
                  </li>
                </ul>

                <div className="work-cards">
                  <NavLink to="/orphan-support-programm" className="card">
                    <img src={drop} alt="" />
                    <div className="card-text-wraper">
                      <h6>Orphan Support Programs</h6>
                      <p>Providing school uniforms, shoes, and learning essentials...</p>
                    </div>
                  </NavLink>

                  <NavLink to="/women-community" className="card">
                    <img src={drop} alt="" />
                    <div className="card-text-wraper">
                      <h6>Women’s Community Gardens</h6>
                      <p>Supporting women with seeds, tools, and fertilizers to grow...</p>
                    </div>
                  </NavLink>

                  <NavLink to="/widows-fund" className="card">
                    <img src={drop} alt="" />
                    <div className="card-text-wraper">
                      <h6>Widows Empowerment Fund</h6>
                      <p>Offering micro-loans that help widows start or rebuild...</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </li>

            {/* OUR IMPACT */}
            <li>
              <NavLink to="/our-impact">Our Impact</NavLink>
            </li>

            {/* TAKE ACTION */}
            <li className="dropdown">
              <span>
                Take Action <FaChevronDown />
              </span>
              <ul className="dropdown-menu simple">
                <li>
                  <NavLink to="/donate">Donate</NavLink>
                </li>
                <li>
                  <NavLink to="/donate-monthley">Donate Monthly</NavLink>
                </li>
                <li>
                  <NavLink to="/way-to-give">Ways To Give</NavLink>
                </li>
                <li>
                  <NavLink to="/partner">Partner With Us</NavLink>
                </li>
                <li>
                  <NavLink to="/volunter">Volunteer</NavLink>
                </li>
              </ul>
            </li>

            {/* ABOUT US */}
            <li className="dropdown">
              <span>
                About Us <FaChevronDown />
              </span>
              <ul className="dropdown-menu simple">
                <li>
                  <NavLink to="/story-mission">Story & Mission</NavLink>
                </li>
                <li>
                  <NavLink to="/our-team">Our Team</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </li>
          </ul>

        </div>

        {/* RIGHT */}
        <div className="nav-right">
         <button className="volunteer">
  <NavLink to="/volunter">Volunteer</NavLink>
</button>
           <button className="volunteer">
  <NavLink to="/donate">Donate</NavLink>
</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
