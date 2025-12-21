import React from "react";
import MenuIcon from "/menu.svg";

interface MenuProps {
    children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
    return <>
    <img src={MenuIcon} alt="menu" className="lg:hidden" />
    <div>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Projects</a>
        <a href="#">Testimonials</a>
        <a href="#">FAQ</a>
    </div>{children}</>;
}

export default Menu;