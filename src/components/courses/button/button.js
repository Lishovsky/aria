import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledButton = styled.button`
    color: #fff;
    padding: 20px 50px;
    text-transform: uppercase;
    font-weight: bold;
    height: 80px;
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 1;
    background: none;
    border: 5px solid #fff;
    cursor: pointer;
    transition: 800ms;
    overflow: hidden;
    &:hover {
        color: #000;
        background: #fff;
        &::after {
            left: -100%;
        }
        &::before {
            left: 100%;
        }
    }
    &::after {
        content: '';
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0%;
        left: 100%;
        background: #fff;
        transition: 400ms;
        border: 5px solid #fff;
        z-index: -1;
    }
    &::before {
        content: '';
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0%;
        left: -100%;
        background: #fff;
        transition: 400ms;
        border: 5px solid #fff;
        z-index: -1;
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        width: 75%;
        padding: 10px;
        transform: translateY(-150%) translateX(-50%);
    }

`

const moveToTop = () => {
    window.scrollTo(0, 0);
}

const Button = () => (
    <Link to="/szkolenia" onClick={moveToTop}>
        <StyledButton>
            Sprawdź ofertę szkoleń
        </StyledButton>
    </Link>
);

export default Button;