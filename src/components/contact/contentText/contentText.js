import React from "react";
import styled from "styled-components";
import location from '../../../assets/location.svg'
import mail from '../../../assets/mail.svg'
import phone from '../../../assets/phone.svg'



const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    @media only screen and (max-width: 940px) {
        flex-direction: column;
        align-items: center;
    }
`

const Box = styled.div`
    padding: 10vh 0 5vh 0;
    width: calc(75vw / 3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 940px) {
        width: 100%;
    }
`

const Image = styled.img`
    height: 100px;
    margin-bottom: 4vh;
`

const HeadingText = styled.h2`
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    color: #814C53;
`

const Description = styled.h3`
    color: rgba(21,27,53,1);
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
`

const ContentText = () => (
    <Container>
        <Box>
            <Image src={phone} alt="phone"></Image>
            <HeadingText>Telefon</HeadingText>
            <Description>794 714 017</Description>
        </Box>
        <Box>
            <Image src={mail} alt="mail"></Image>
            <HeadingText>E-mail</HeadingText>
            <Description>Kontakt@ariaszkolenia.pl</Description>
        </Box>
        <Box>
            <Image src={location} alt="location"></Image>
            <HeadingText>Adres</HeadingText>
            <Description>Główna 2, 05-200 Stare Grabie</Description>
        </Box>
    </Container>
);

export default ContentText;