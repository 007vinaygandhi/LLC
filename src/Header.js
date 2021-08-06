import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PersonPinIcon from '@material-ui/icons/PersonPin';

function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="header">
      <nav className="main-nav">
        <div className="logo">
          <Link to="/">
            <h2>
             CARE
            </h2>
          </Link>
        </div>
        {/* <div> */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <Link to="/read">
              <li>
                <a href="#">Healthy Read</a>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <a href="#">AboutUs</a>
              </li>
            </Link>
            
            <Link to="/yoga">
              <li>
                <a href="#">Yoga</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="social-media">
          <div className="header">
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
