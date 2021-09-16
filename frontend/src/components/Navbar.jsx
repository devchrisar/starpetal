import React, { useState } from "react";
import "../App.scss";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import CartWidget from "../components/CartWidget";
import { SiMinutemailer } from "react-icons/si";
import { RiSearchEyeFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLink, SetShowLink] = useState(false);
  return (
    /*======= Top Bar ======= */
    <div>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <SiMinutemailer size="2em" className="topbar_icon" />
            <a href="mailto:devchrisar.admin@zohomail.com">
              devchrisar.admin@zohomail.com
            </a>
            <MdPhone size="2em" className="topbar_icon" /> +9876543210
          </div>
        </div>
      </div>

      <div className="Navbar">
        <div className="Nav_leftSide">
          <div className="routers" id={showLink ? "navHidden" : ""}>
            <Link to="/">
              <p className="logo__nav">Inicio</p>
            </Link>
          </div>
          <button onClick={() => SetShowLink(!showLink)}>
            <HiOutlineViewGridAdd size="1.5rem" className="Nav__icons" />
          </button>
        </div>
        <div className="Nav_rightSide">
          <CartWidget className="Nav__icons" />
          <input type="text" id="searchBox" placeholder="Buscar producto" />
          <RiSearchEyeFill className="Nav__iconsSearch" size="1.5rem" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
