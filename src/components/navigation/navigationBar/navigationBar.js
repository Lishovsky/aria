import React from "react";
import NavigationLogo from "../navigationLogo/navigationLogo";
import NavigationLinksBox, { showMenu } from "../navigationLinksBox/navigationLinksBox";
import styled from "styled-components";

const Header = styled.header`
    border-bottom: 1px solid rgba(237,222,192,0);
    transition: 300ms;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;
    width: 100%;
    padding: 0vh 5vw;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
`

const Toggler = styled.div`
    cursor: pointer;
    width: 35px;
    height: 25px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 900px) {
        display: flex;
    }
`

const Span = styled.span`
    width: 35px;
    height: 4px;
    background: #EDDEC0;
`
window.addEventListener('scroll', () => {
    const mobileNav = document.querySelector('.linksBoxs');
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = "rgba(21,27,53,1)";
        header.style.borderBottom = "1px solid rgba(237,222,192,1)"
    }
    else {
        if (mobileNav.classList.contains('isActive') === false) {
            header.style.background = "none";
            header.style.borderBottom = "1px solid rgba(237,222,192,0)"
        }
    }
})

const Navigation = () => {

    return (
        <Header className="header">
            <NavigationLogo />
            <NavigationLinksBox />
            <Toggler onClick={showMenu}>
                <Span />
                <Span />
                <Span />
            </Toggler>
        </Header>
    )

};

export default Navigation;