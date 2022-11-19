import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


import kitchenNightmares from "../img/kitchen-nightmares.jpg";
import masterChef from "../img/masterchef.jpg";
import hellsKitchen from "../img/hells-kitchen.jpg";

export default function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            <div class="galleryImgs">
            <img src={kitchenNightmares} width={200} height={325} alt = "kitchen nightmares"/>
            <img src={masterChef} width={200} height={325} alt = "master chef"/>
            <img src={hellsKitchen} width={200} tall={400} alt = "hells kitchen"/>
            </div>
            
        </div>
    );
};