import React from "react";
import styled from "styled-components";
import facebook from '../../../assets/fb.svg'
import instagram from '../../../assets/ig.svg'
import saloner from '../../../assets/saloner.svg'



const Container = styled.div`
    width: 100px;
    height: 100%;
    text-align: center;
    margin-left: auto;
    @media only screen and (max-width: 860px) {
        width: 80px;
        margin-bottom: 3vh;
        margin: 0 auto;
        text-align: center;
    }
`

const Socials = styled.div`
    display: flex;
    justify-content: space-beetween;
    &:nth-child(1) {
        margin-bottom: 30px;
}
@media only screen and (max-width: 860px) {
    width: 100%;
    text-align: center;
    justify-content: center;
}
`

const Link = styled.a`
    &:nth-child(2){
        margin-left: auto;
    }
`



const SocialsBox = () => (
    <Container>
        <Socials>
            <Link href="https://www.facebook.com/AriaMUA" target="_blank"><img src={facebook} alt="facebook" /></Link>
            <Link href="https://www.instagram.com/aria.aroma.atelier/" target="_blank"><img src={instagram} alt="instagram" /></Link>
        </Socials>
        <Socials>
            <Link href="https://saloner.pl/salon/aria-angelika-olejnik/ " target="_blank"><img src={saloner} alt="booksy" /></Link>
        </Socials>
    </Container>
);

export default SocialsBox;