import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  // handle nav mobile
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  // close menu
  const closeMenu = () => setClick(false)

  // change nav bg color
  const [color, setColor] = useState(false)
  const changeBgColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    }else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeBgColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className="container">
        <h1 className="navbar-logo">
          <Link to={"/"}>
            Indo<span className="primary">crypto</span>
          </Link>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/" activeclassname="selected" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/coin" activeclassname="selected" onClick={closeMenu}>
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink to="/not-found" activeclassname="selected" onClick={closeMenu}>
              Earn
            </NavLink>
          </li>
          <li>
            <Link to={"/not-found"}>About</Link>
          </li>
          <li><button className="btn btn-mobile">Signup</button></li>
        </ul>
        <div className="btn-group">
          <button className="btn btn-header">Signup</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};
