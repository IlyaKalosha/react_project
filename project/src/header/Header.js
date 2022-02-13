import logo from "../assets/logo.svg"
import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Logo" alt="logo"/>
            <nav className="Nav">
                <a href="/students">Студенты</a>
                <a href="/companies">Компании</a>
                <a href="/events">События</a>
                <a href="/contacts">Контакты</a>
                <a href="/manuals">Справочники</a>
            </nav>
        </header>
    );
}

export default Header;


