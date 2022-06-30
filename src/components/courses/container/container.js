import React from "react";
import styled from "styled-components";
import ContentBox from "../contentBox/contentBox";
import Button from "../button/button";
import LogoBox from "../logo/logo";


const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: #151B35;
    position: relative;
    @media only screen and (max-width: 600px) {
        height: 60vh;
    }

`

const Courses = () => (
    <Container>
        <ContentBox />
        <Button />
        <LogoBox />
    </Container>
);

export default Courses;