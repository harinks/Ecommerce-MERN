import React from 'react';
import { ReactNavbar } from "overlay-navbar";
import "./Header.css";
import logo from '../../../images/logo.png';

const options = {
    burgerColorHover: "black",
    logo,
    logoWidth: "15vmax",
    navColor1: "lightgray",
    logoHoverSize: "10px",
    logoHoverColor: "#57B2FC",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.5vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#57B2FC",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#57B2FC",
    searchIconColorHover: "#57B2FC",
    cartIconColorHover: "#57B2FC",
    cartIconMargin: "1vmax",
};

const Header = () => {
    return <ReactNavbar {...options} />
}

export default Header