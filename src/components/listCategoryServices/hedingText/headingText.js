import React from "react";
import styled from "styled-components";

const Text = styled.h2`
    color: #34507F;
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 5vh;
`

const HeadingText = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('kategoria');

    setTimeout(() => {
        const headingElement = document.querySelector('.serviceName');
        headingElement.innerText = name;
    }, 50)

    return (
        <Text className="serviceName"></Text>
    )
}

export default HeadingText;