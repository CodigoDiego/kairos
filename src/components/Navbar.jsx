import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/kairos.svg';
import "../stylesheets/Navbar.css"

export function Navbar(){
  return(
    <nav>
      <Link to="/">
        <div>
          <img src={logo} alt="kairosLogo"/>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}