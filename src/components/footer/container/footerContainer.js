import React from "react";
import styled from "styled-components";


const Container = styled.section`
    width: 100%;
    height: auto;
    background: #814C53;
    padding: 30px 5vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`

const Text = styled.p`
    margin-bottom: 0;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    @media only screen and (max-width: 600px) {
        &:first-child {
            margin-bottom: 5px;
        }
    }
`

const FooterContainer = () => (
    <Container>
        <Text>COPYRIGHT BY ANGELIKA OLEJNIK</Text>
        <Text>CREATED BY COLORBLUE.PL - ALL RIGHTS RESERVED</Text>
    </Container>
);

export default FooterContainer