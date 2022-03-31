import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1 className="navbar-logo">
          <Link to={"/"}>
            Indo<span className="primary">crypto</span>
          </Link>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            {/* <Link to={"/"}>Home</Link> */}
            <NavLink to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to={"/coin"}>Featured</Link> */}
            <NavLink to="/coin" activeClassName="selected">
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink to="/not-found" activeClassName="selected">
              Earn
            </NavLink>
            {/* <Link to={"/not-found"}>Earn</Link> */}
          </li>
          <li>
            <Link to={"/not-found"}>About</Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Signup</button>
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
