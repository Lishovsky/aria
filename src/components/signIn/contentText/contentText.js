import React from "react";
import '../../../css/style.css';
import styled from "styled-components";
import { services } from "../../../data/services";
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
    color: #9C9C9C;
    margin:3.5vh 0 0 0;
    font-size: 14px;
`



const ContentText = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const category = urlParams.get('kategoria');

    if (category === 'Rytuały') {
        return (
            <Container>
                {services[0].list.map(element => {
                    return (
                        <Box className="box">
                            <Link className="box-link" to={'/atelier-urody/usluga/?' + new URLSearchParams({ kategoria: 0, nazwa: element.serviceName, id: services[0].list.indexOf(element) })} >
                                <Heading> {element.serviceName}</Heading>
                                <Text>Cena: {element.price}</Text>
                            </Link>
                        </Box>
                    )
                })}
            </Container>
        )
    }
    else if (category === 'Rzęsy') {
        return (
            <Container>
                {services[1].list.map(element => {
                    return (
                        <Box className="box">
                            <Link className="box-link" to={'/atelier-urody/usluga/?' + new URLSearchParams({ kategoria: 1, nazwa: element.serviceName, id: services[1].list.indexOf(element) })} >
                                <Heading> {element.serviceName}</Heading>
                                <Text>Cena: {element.price}</Text>
                            </Link>
                        </Box>
                    )
                })}
            </Container>
        )
    }
    else if (category === 'Rzęsy - specjalne') {
        return (
            <Container>
                {services[2].list.map(element => {
                    return (
                        <Box className="box">
                            <Link className="box-link" to={'/atelier-urody/usluga/?' + new URLSearchParams({ kategoria: 2, nazwa: element.serviceName, id: services[2].list.indexOf(element) })} >
                                <Heading> {element.serviceName}</Heading>
                                <Text>Cena: {element.price}</Text>
                            </Link>
                        </Box>
                    )
                })}
            </Container>
        )
    }
    else if (category === 'Ciało') {
        return (
            <Container>
                {services[3].list.map(element => {
                    return (
                        <Box className="box">
                            <Link className="box-link" to={'/atelier-urody/usluga/?' + new URLSearchParams({ kategoria: 3, nazwa: element.serviceName, id: services[3].list.indexOf(element) })} >
                                <Heading> {element.serviceName}</Heading>
                                <Text>Cena: {element.price}</Text>
                            </Link>
                        </Box>
                    )
                })}
            </Container>
        )
    }
    else if (category === 'Brwii') {
        return (
            <Container>
                {services[4].list.map(element => {
                    return (
                        <Box className="box">
                            <Link className="box-link" to={'/atelier-urody/usluga/?' + new URLSearchParams({ kategoria: 4, nazwa: element.serviceName, id: services[4].list.indexOf(element) })} >
                                <Heading> {element.serviceName}</Heading>
                                <Text>Cena: {element.price}</Text>
                            </Link>
                        </Box>
                    )
                })}
            </Container>
        )
    }
    else if (category === 'Opalanie natryskowe') {
        return (
            <Container>
                {services[5].list.map(element => {
                    return (
                        <Box className="box">
                            <Link className="box-link" to={'/atelier-urody/usluga/?' + new URLSearchParams({ kategoria: 5, nazwa: element.serviceName, id: services[5].list.indexOf(element) })} >
                                <Heading> {element.serviceName}</Heading>
                                <Text>Cena: {element.price}</Text>
                            </Link>
                        </Box>
                    )
                })}
            </Container>
        )
    }
    else if (category === 'Depilacja') {
        return (
            <Container>
                {services[6].list.map(element => {
                    return (
                        <Box className="box">
                            <Link className="box-link" to={'/atelier-urody/usluga/?' + new URLSearchParams({ kategoria: 6, nazwa: element.serviceName, id: services[6].list.indexOf(element) })} >
                                <Heading> {element.serviceName}</Heading>
                                <Text>Cena: {element.price}</Text>
                            </Link>
                        </Box>
                    )
                })}
            </Container>
        )
    }
}

export default ContentText;