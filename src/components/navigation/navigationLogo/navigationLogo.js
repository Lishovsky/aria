import React from "react";
import logo from '../../../assets/aria-logo.svg'
import styled from "styled-components";
import { Link } from "react-router-dom";
import '../../../css/style.css';

const Image = styled.img`
    height: 90%;
    position relative;
    top: 50%;
    transform: translateY(-50%);
`

const NavigationLogo = () => (
    <Link className="logoBox" to="/"><Image src={logo} alt="logo" /></Link>
);


export default NavigationLogo;