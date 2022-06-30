import React from "react";
import styled from "styled-components";
import image from '../../../assets/contest.jpg'

const Content = styled.div`
    width: 100%;
    height: 100%;
    background:url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 25%;
    display: flex;
    opacity: 0.05;
`

const ContentBox = () => (
    <Content>
    </Content>
);

export default ContentBox;