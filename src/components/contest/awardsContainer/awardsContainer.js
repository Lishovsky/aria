import React from "react";
import styled from "styled-components";
import { awards } from "../../../data/awards";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    height: auto;
    width: 100%;
`

const ContentBox = styled.div`
margin: 0 auto;
display: flex;
min-height: 30vh;
padding: 6vh 5vw;
max-width: 1000px;
text-align: center;
flex-direction: column;
align-items: center;
justify-content: center;
transform: translateY(-6vh);
`

const Place = styled.h2`
font-size: 25px;
color: #CBA761;
margin: 0;
text-transform: uppercase;
`

const AwardName = styled.h3`
font-size:18px;
margin:  1.5vh 0 0 0;
color: #9C9C9C;
text-transform: uppercase;
`

const Awards = () => (
    <Container>
        <Carousel indicators="FALSE">
            {awards.map((award) => {
                return <Carousel.Item>
                    <ContentBox>
                        <Place>{award.award}</Place>
                        <AwardName>{award.placeInContest} {award.category}</AwardName>
                    </ContentBox>
                </Carousel.Item>
            })}
        </Carousel>

    </Container>
);

export default Awards;
