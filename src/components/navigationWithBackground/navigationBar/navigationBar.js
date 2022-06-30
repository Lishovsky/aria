import React from "react";
import NavigationLogo from "../navigationLogo/navigationLogo";
import NavigationLinksBox from "../navigationLinksBox/navigationLinksBox";
import styled from "styled-components";

const Header = styled.header`
    border-bottom: 1px solid rgba(237,222,192,1);
    background: rgba(21,27,53,1);
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

export const showMenu = () => {
    const mobileNav = document.querySelector('.linksBoxs');
    mobileNav.classList.toggle('isActive');
    if (mobileNav.classList.contains('isActive')) {
        mobileNav.style.transform = 'translateX(0%)';
    }
    else {
        mobileNav.style.transform = 'translateX(-100%)';
    }
}

const Navigation = () => {

    return (
        <Header>
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