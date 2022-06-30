import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: calc(100%/3);
    height: 100%
    @media only screen and (max-width: 860px) {
        width: 100%;
        margin-bottom: 3vh;
        text-align: center;
    }
`

const Name = styled.h2`
    font-size: 15px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    margin-bottom: 0px;
`

const Adress = styled.h3`
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    margin-top: 0px;
`

const Info = styled.h5`
    font-size: 10px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
`

const ContactData = () => (
    <Container>
        <Name>Aria Angelika Olejnik</Name>
        <Adress>ul. główna 2,<br></br>05-200 Stare Grabie</Adress>
        <Info>(w nawigacji ul. główna 30a, na przeciwko sklepu z art. metalowymi)</Info>
        <Adress>NIP: 1251645982<br></br>
            NR Konta: 11 1111 1111 1111 1111 1111 1111</Adress>
    </Container>
);

export default ContactData;