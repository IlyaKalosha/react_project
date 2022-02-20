import logo from "../assets/logo.svg"
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Logo" alt="logo"/>
            <nav className="Nav">
                <Link to="/students">Студенты</Link>
                <Link to="/companies">Компании</Link>
                <Link to="/events">События</Link>
                <Link to="/contacts">Контакты</Link>
                <Link to="/manuals">Справочники</Link>
            </nav>
        </header>
    );
}

export default Header;


