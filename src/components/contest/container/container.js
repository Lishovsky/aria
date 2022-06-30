import React from "react";
import styled from "styled-components";
import Awards from "../awardsContainer/awardsContainer";
import Heading from "../headingComponent/heading";

const Content = styled.section`
    width: 100%;
    height: auto;
    background: rgba(255,255,255,1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
`


const Contest = () => (
    <Content>
        <Heading />
        <Awards />
    </Content>
);

export default Contest;