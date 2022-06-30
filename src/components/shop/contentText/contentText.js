import React from "react";
import styled from "styled-components";
import { products } from "../../../data/products";
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
    text-align: center;
    @media only screen and (max-width: 1240px) {
        width: calc(100% / 2);
    }
    @media only screen and (max-width: 680px) {
        width: 100%;
    }
`

// const Image = styled.img` 
//     margin: 0 auto;
//     width: 100%;
//     margin-bottom: 4vh;
// `

const Heading = styled.h2` 
    text-align: center;
    color: #814C53;
    font-size: 18px;
    text-transform: uppercase;
    
`

const Price = styled.h3` 
    text-align: center;
    color: rgba(21,27,53,1);
    margin: 1vh 0 1vh 0;
    font-size: 15px;
    text-transform: uppercase;
`


const ContentText = () => {

    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const name = urlParams.get('nazwa');
    // alert(name);

    return (
        <>
            <Container>
                {products.map(element => {
                    return (
                        <Box className="box">
                            <div>
                                {/* <Image src={image} alt="Image" /> */}
                                <Heading> {element.productName}</Heading>
                            </div>
                            <div>
                                <Price>{element.price} zł</Price>
                            </div>
                            <Link className="price" to={'/produkt/?' + new URLSearchParams({ nazwa: element.productName })} > Zobacz więcej</Link>
                        </Box>
                    )
                })}
            </Container>
        </>
    )

}

export default ContentText;