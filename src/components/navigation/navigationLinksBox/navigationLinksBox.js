import React from "react";
import { links } from '../../../data/navigationLinks';
import NavigationLink from "../navigationLink/navigationLink";
import styled from "styled-components";

export const showMenu = () => {
    const mobileNav = document.querySelector('.linksBoxs');
    mobileNav.classList.toggle('isActive');
    const header = document.querySelector('.header');
    if (mobileNav.classList.contains('isActive')) {
        header.style.background = "rgba(21,27,53,1)";
        header.style.borderBottom = "2px solid rgba(237,222,192,1)"
        mobileNav.style.transform = 'translateX(0%)';
    }
    else {
        if (window.scrollY < 100) {
            mobileNav.style.transform = 'translateX(-100%)';
            header.style.background = "none";
            header.style.borderBottom = "2px solid rgba(237,222,192,0)"
        }
        else {
            mobileNav.style.transform = 'translateX(-100%)';
        }
    }
}


const MainNavigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media only screen and (max-width: 900px) {
        position: fixed;
        transition: 300ms;
        top: 15vh;
        left: 0;
        width: 100%;
        height: calc(100% - 15vh);
        background: rgba(17,17,30,1);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(-100%);
    }
`

const NavigationLinksBox = () => (

    <MainNavigation className="linksBoxs">
        {links.map((links) => (
            <NavigationLink links={links} />
        ))}
    </MainNavigation>
);

export default NavigationLinksBox;