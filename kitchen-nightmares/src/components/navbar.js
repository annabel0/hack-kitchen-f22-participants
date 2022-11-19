import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <p> </p>
            <NavLink to="/about">About</NavLink>
            <p> </p>
            <NavLink to="/awards">Awards</NavLink>
            <p> </p>
            <NavLink to="/gallery">Gallery</NavLink>
        </div>
    );
}