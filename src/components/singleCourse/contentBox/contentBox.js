import React from "react";
import styled from "styled-components";
import HeadingText from "../hedingText/headingText";
import ContentText from "../contentText/contentText";
import Button from '../button/button'

const Content = styled.section`
    width: 100%;
    height: auto;
    background: rgba(218,193,133,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10vh 5vw;
    box-sizing: border-box;
`

const SingleCourseContent = () => (
    <Content>
        <HeadingText />
        <ContentText />
        <Button />
    </Content>
);

export default SingleCourseContent;