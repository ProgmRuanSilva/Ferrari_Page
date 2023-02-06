import React from "react";
import './header.css';

export default function Header() {
    return(
        <div>
            <img className="carImg" src={require('../../assets/car.png')}/>
            <img className="logo"  src={require('../../assets/logo.png')} alt="logo"/>
            <div className="containerHeader">
            <h1 className="title">Ferrari is the Best<br/> Cars Mark of World?<hr/></h1>
            <h1 className="title2">Why Ferrari is the best mark car of the world<br/> and ho they did did this</h1>
            </div>
        </div>
    )
}