import React from "react";
import styled from "styled-components";
import ContactData from "../data/data";
import HoursData from "../hours/hours";
import SocialsBox from "../socials/socials";


const Container = styled.section`
    width: 100%;
    background: #9A656C;
    position: relative;
    padding: 10vh 5vw;
    box-sizing: border-box;
    display: flex;
    @media only screen and (max-width: 860px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 10vh 0;
    }

`

const ContactDataContainer = () => (
    <Container>
        <ContactData />
        <HoursData />
        <SocialsBox />
    </Container>
)


export default ContactDataContainer;