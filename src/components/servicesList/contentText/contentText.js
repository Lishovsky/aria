import React from "react";
import styled from "styled-components";
import { services } from '../../../data/services';
import '../../../css/style.css';
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`

const Box = styled.div`
    width: calc(100% / 3);
    padding: 5vh 2.5vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eee;
    @media only screen and (max-width: 1240px) {
        width: calc(100% / 2);
    }
    @media only screen and (max-width: 680px) {
        width: 100%;
    }
`

const Heading = styled.h2` 
    text-align: center;
    color: #814C53;
    font-size: 18px;
    text-transform: uppercase;
    
`
const Text = styled.p` 
    text-align: center;
    color: #9C9C9C;;
    margin:3.5vh 0 0 0;
    font-size: 14px;
`



const ContentText = () => {

    return (
        <>
            <Container>
                {services.map(element => {
                    return (
                        <Box className="box">
                            <Link className="box-link" to={'/atelier-urody/lista/?' + new URLSearchParams({ kategoria: element.category })} >
                                <Heading> {element.category}</Heading>
                                <Text>Zobacz usługi z tej kategorii</Text>
                            </Link>
                        </Box>
                    )
                })}
            </Container>
        </>
    )

}

export default ContentText;