import React from "react";
import styled from "styled-components";

const MapContainer = styled.section`
    width: 100%;
    height: 80vh;
`

const MapContent = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
    loading: lazy;
`

const Map = () => (
    <MapContainer>
        <MapContent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0050544294495!2d21.31145151593708!3d52.37032835506268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471edbc3ae9475b7%3A0x8c3d9e9429616286!2sAria%20Angelika%20Olejnik%20Atelier%20Urody%20i%20Akademia!5e0!3m2!1spl!2spl!4v1654106652617!5m2!1spl!2spl"></MapContent>
    </MapContainer>
);

export default Map;