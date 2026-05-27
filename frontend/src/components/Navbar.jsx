import { useState } from "react";
import { Link } from "react-router-dom";


import "../styles/Navbar.css";

import logo from "../assets/logo.jpg";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="logo">

  <img
    src={logo}
    alt="logo"
    className="logo-image"
  />

  <h2>Unique Tailoring Center</h2>

</div>

      <div
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/booking">Booking</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;