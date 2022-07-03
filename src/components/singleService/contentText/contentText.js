import React from "react";
import '../../../css/style.css';
import styled from "styled-components";
import { services } from "../../../data/services";
import Button from '../button/button'

const Text = styled.p`
    color: #9C9C9C;
    font-size: 15px;
    text-align: center;
    margin-top: 3vh;
`

const Price = styled.p`
    color: #9C9C9C;
    font-size: 17px;
    text-align: left;
    margin-top: 1vh;
    text-align: center;
    font-weight: bold;
`

const ContentText = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('kategoria');
    const idString = urlParams.get('id');
    const id = parseInt(idString);
    const categoryInt = parseInt(category);


    setTimeout(() => {
        const text = document.querySelector('.content');
        const price = document.querySelector('.priceElement');

        text.innerHTML = `${services[categoryInt].list[id]['shortContent']}`

        price.innerHTML = `
        Cena: ${services[categoryInt].list[id]['price']}
        <br>Czas trwania: ${services[categoryInt].list[id]['time']}`

    }, 10);

    return (
        <>
            <Text className="content"></Text>
            <Price className="priceElement"></Price>
            <Button />
        </>
    )

}

export default ContentText;