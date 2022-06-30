import React from "react";
import styled from "styled-components";

const Text = styled.p`
    color: #9C9C9C;
    font-size: 15px;
    text-align: center;
    margin-top: 3vh;
    @media only screen and (max-width: 600px) {
        text-align: justify;
    }
`

const contentText = `Założycielka i właścicielka Atelier Urody i Akademii ARIA. Profesjonalistka z zakresu przedłużania rzes, laminowania rzes i brwi, stylizacji brwi a także depilacji. Instruktor stylizacji rzęs oraz brwi Lash.pl oraz depilacji Lycon. Jestem autorką własnych programów i skryptów szkoleniowych oraz artykułów branżowych. Wielokrotną mistrzynią w mistrzostwach online i stacjonarnych w Polsce, Szkocji, Włoszech, Hiszpanii, Wietnamie, Irlandii, Kanadzie Międzynarodowym sędzią mistrzostw m.in. w Polsce, Szkocji, Brazylii, Finlandii, Ukrainie, Danii, Łotwie. W branży beauty jestem już ponad 10 lat i stałe podnoszę swoje umiejętności uczestnicząc w szkoleniach i konferencjach. Prowadzę szkolenia już od 5 lat a moje kursantki odnoszą sukcesy, zakładają własne firmy, zostają instruktorami, wygrywają mistrzostwa. Swoją wiedzę i doświadczenie przekładam również w pracy biegłego sądowego w dziedzinie kosmetologii. Wykonując zabiegi dbam o każdy detal, cenię naturalność i staram się podkreślić naturalne piękno klientki. W moim Atelier znajdziesz szeroką gamę usług a w Akademii nauczę Cię wszystkiego z zakresu oprawy oka, depilacji i opalania natryskowego.`

const ContentText = () => (
    <Text>{contentText}</Text>
);

export default ContentText;