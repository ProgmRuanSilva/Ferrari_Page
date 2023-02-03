import React from "react";
import './header.css';

export default function Header() {
    return(
        <div>
            <img className="carImg"  src={require('../../assets/car.jpg')} alt="backgroundImg"/>
            <img className="logo"  src={require('../../assets/logo.svg')} alt="logo"/>
            <h1 className="title">Ferrari is the Best<br/> Cars Mark of World?</h1>
        </div>
    )
}