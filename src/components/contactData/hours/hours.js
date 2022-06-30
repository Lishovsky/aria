import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: calc(100%/3);
    height: 100%;
    text-align: center;
    @media only screen and (max-width: 860px) {
        width: 100%;
        margin: 3vh 0;
        text-align: center;
    }
`

const Name = styled.h2`
    font-size: 15px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    margin-bottom: 0px;
`

const Hour = styled.h3`
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    margin-top: 0px;
`

const HoursData = () => (
    <Container>
        <Name>GODZINY OTWARCIA
            <Hour>
                PN: 09:00 - 20:00<br></br>
                WT: 09:00 - 20:00<br></br>
                ŚR: 09:00 - 20:00<br></br>
                CZW: 09:00 - 20:00<br></br>
                PT: 09:00 - 20:00<br></br>
                SO:	NIECZYNNE<br></br>
                ND:	NIECZYNNE<br></br>
            </Hour>
        </Name>
    </Container >
);

export default HoursData;