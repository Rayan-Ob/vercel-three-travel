



import React, { useState } from "react";
import "./NavBar.css"
import logo from "../../../public/images/logoNavbar.png"
import { NavLink } from "react-router-dom";

const Navbar = ({ menu }) => {

    const [scrollChange, setscrollChange] = useState(false)

    const [isOpen, setIsOpen] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 200) {
            setscrollChange(true)
        }
        else {
            setscrollChange(false)
        }
    }
    window.addEventListener("scroll", changeColor);
    return (
        <div className={scrollChange ? "Navbar color-scroll" : "Navbar"}>
            <img src={logo} alt="logo" />
            <div className={`nav-items ${isOpen && "open"}`}>
                <ul>
                    {menu.map((element, index) => {
                        return (
                            <li key={index} >
                                <NavLink to={element.path}>{element.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>

                <button>Get in Touch</button>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div >
                    <i className="fa-solid fa-bars"   ></i>
                    <i className="fa-solid fa-times icon-display"  ></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
