import React from "react";
import styled from "styled-components";
import logo from '../../assets/aria-logo.svg'
import person from '../../assets/angelika-olejnik.png'


const TopBarBox = styled.section`
    width: 100%;
    height: 100vh;
    background: #151B35;
    display: flex;
`

const TopBarBoxItem = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1240px) {
        &:first-child {
            position: absolute;
            z-index: 0;
            width: 100%;
        }
        &:last-child {
            position: absolute;
            z-index: 1;
            width: 100%;
        }
    }
    @media only screen and (max-width: 600px) {
        &:first-child {
            width: 100%;
            height: 100%;
            position: relative;
        }
        &:last-child{
             width: 100%;
             position: absolute;
             top: 0;
             left: 0;
        }
    }
`

const PersonStyle = styled.img`
    height: 90%;
    position: relative;
    top: 5%;
    left: 10%;
    @media only screen and (max-width: 1240px) {
        &:first-child {
            height: 85%;
            transform: translateY(5%) translateX(-10%);

        }
    }
    @media only screen and (max-width: 600px) {
        &:first-child {
            transform: translateY(5%) translateX(-10%);
        }
    }
`

const LogoStyle = styled.img`
    height: 50%;
    position: relative;
    top: 10%;
    right: 10%;
    @media only screen and (max-width: 1240px) {
        &:first-child {
            display: none;
        }
    }
`



const TopBar = () => (
    <TopBarBox>
        <TopBarBoxItem><PersonStyle src={person} alt="Aria Visage" /></TopBarBoxItem>
        <TopBarBoxItem><LogoStyle src={logo} alt="Aria Visage" /></TopBarBoxItem>
    </TopBarBox>
);

export default TopBar;