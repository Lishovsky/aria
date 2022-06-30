import React from "react";
import styled from "styled-components";
import logo from '../../../assets/concest.svg'

const Container = styled.div`
width: 100%;
text-align: center;
`

const ConcestImage = styled.img`
    transform: translateY(10vh);
    margin: 0 auto
`

const HeadingText = styled.h2`
    position: relative;
    background: rgba(255,255,255,0.5);
    padding: 20px;
    z-index: 1;
    transform: translateY(calc(-2.5vh - 20px));
    color: #34507F;
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
`

const Heading = () => (
    <Container>
        <ConcestImage src={logo} alt="concest" />
        <HeadingText>WYRÓŻNIENIA I CERTYFIKATY</HeadingText>
    </Container>
);

export default Heading;