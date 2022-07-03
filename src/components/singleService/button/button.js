import React from "react";
import styled from "styled-components";

const Hiperlink = styled.a`
    text-decoration: none;
`

const StyledButton = styled.button`
    margin: 5vh 0 0 0;
    color:  rgba(21,27,53,1);
    padding: 20px 50px;
    text-transform: uppercase;
    font-weight: bold;
    height: 80px;
    opacity: 1;
    position: relative;
    background: none;
    border: 5px solid  rgba(21,27,53,1);
    cursor: pointer;
    transition: 800ms;
    overflow: hidden;
    &:hover {
        color: #fff;
        background:  rgba(21,27,53,1);
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
        background:  rgba(21,27,53,1);
        transition: 400ms;
        border: 5px solid  rgba(21,27,53,1);
        z-index: -1;
    }
    &::before {
        content: '';
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0%;
        left: -100%;
        background:  rgba(21,27,53,1);
        transition: 400ms;
        border: 5px solid  rgba(21,27,53,1);
        z-index: -1;
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        width: 75%;
        padding: 10px;
        transform: translateY(-150%) translateX(-50%);
    }

`


const Button = () => (
    <Hiperlink href="https://saloner.pl/salon/aria-angelika-olejnik/">
        <StyledButton>
            Zarezerwuj wizytę
        </StyledButton>
    </Hiperlink>
);

export default Button;