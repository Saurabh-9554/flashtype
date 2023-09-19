import React from "react";
import logo from './../../assets/logo.jpg';
import "./Nav.css";

const Nav=()=>{
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="logo" className="flash-logo" />
                <p className="flash-logo-text">FlashType</p>           
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="https://github.com/Saurabh-9554"
                    rel="noreferrer"
                >
                    AAM
                </a>
            </div>
        </div>
    );
}

export default Nav;