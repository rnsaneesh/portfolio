import { Link } from "react-scroll";
import "../Css/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  
  return (
    <header>

      <nav>
        <div className="port">Portfolio</div>
        <ul>
        
        <li ><Link to ="about" smooth={true} duration={500} className="link" >About</Link></li>
          <li><Link to="exp" smooth={true} duration={500} className="link" >Experience </Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="link" >Projects </Link></li>
          <li><Link to="contact" smooth={true} duration={500}  className="link" >Contact </Link></li>
          <li><Link to="certi" smooth={true} duration={500} className="link" >Certifications </Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
