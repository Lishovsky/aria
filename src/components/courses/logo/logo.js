import React from "react";
import styled from "styled-components";
import logo from '../../../assets/lash-logo.svg'

const Logo = styled.img`
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    @media only screen and (max-width: 380px) {
        width: 70%;
    }
`

const LogoBox = () => (
    <Logo src={logo} alt="logo" />
);

export default LogoBox;