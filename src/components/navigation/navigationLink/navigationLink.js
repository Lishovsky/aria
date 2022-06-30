import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import '../../../css/style.css';


const NavigationLink = ({ links: { link, text } }) => (
    <Link onClick={hideMenu} className="link" to={link}>{text}</Link>
);

const hideMenu = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth <= 900) {
        const mobileNav = document.querySelector('.linksBoxs');
        mobileNav.classList.remove('isActive');
        mobileNav.style.transform = 'translateX(-100%)';
    }
    const queryString = window.location.search;
    console.log(queryString);
    // const urlParams = new URLSearchParams(queryString);
}

NavigationLink.propTypes = {
    links: PropTypes.shape({
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default NavigationLink;