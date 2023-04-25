import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import logo from "../assets/writekit-logo-w.png"
import Right from "../assets/right.png"
import dropdown1 from '../assets/dropdown1.png'
import dropdown2 from '../assets/dropdown2.png'
import { FiChevronDown } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-link">
          <div className="navbar-logo">
            <a href="/">
              <img src={logo} alt="logo" width="150px" /></a>
          </div>
          <div className="navbar-links_container">
            <div className="dropdown">
              <button className="dropbtn"> Use cases <FiChevronDown />
              </button>
              <div className="dropdown-menus">
                <a href="social-post-writer"><img src={dropdown1} width="60px" /> Social Post</a>
                <a href="seo-content-writer"><img src={dropdown1} width="60px" /> SEO Content</a>
                <a href="product-description-writer"><img src={dropdown2} width="60px" /> Product Description</a>
                <a href="cold-email-writer"><img src={dropdown2} width="60px" /> Cold Email</a>
              </div>
            </div>
            {/* <div className="dropdown">
    <button className="dropbtn">Features 
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> */}
            <p><a className="style" href="pricing">Pricing</a></p>
            <p><a className="style" href="/#usecases">Start writing</a></p>

            <p><a className="style" href="https://twitter.com/arzamaan1">Contact</a></p>
          </div>
        </div>
        
        <div className="user-profile">
        <div className="dropdown-user">
              <button className="dropbtn"><BiUser size={25} color="#fff"/> 
              </button>
              <div className="dropdown-menus-user">
              <p className="dynamic-user-email">test12345@gmail.com</p>
                <a href="my-plan">My Plan</a>
                <a href="usage">Usage</a>
                
                <a href="Logout"> <FiLogOut/> Logout</a>
                <a href="usage"><div className="no-color-change" style={{background:"#F85D7F", borderRadius: "10px", padding:"2px 8px"}}>Upgrade</div></a>
              </div>
            </div>
           
        </div>
     
        <div className="navbar-sign">
          <Link to="/login2">
            <button> Login <img src={Right} className="size" alt='' /></button>
          </Link>
        </div>

        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <p><a href="social-post-writer">Social Post</a></p>
                <p><a href="seo-content-writer">SEO Content</a></p>
                <p><a href="product-description-writer">Product Desc</a></p>
                <p><a href="cold-email-writer">Cold Email</a></p>
                <p><a href="pricing">pricing</a></p>
                <p><a href="contact">contact</a></p>
              </div>
              <div className="navbar-menu_container-links-sign">
                <a href='login'>
                  <button>Login<img src={Right} className="size" /></button>
                </a>
              </div>
            </div>
          )}
        </div>

      </div>



      <div className="g-line"></div>
    </div>
  )
}

export default Navbar
