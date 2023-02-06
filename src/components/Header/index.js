import React from "react";
import './header.css';
import { motion } from "framer-motion";

export default function Header() {
    return(
        <div>
            <img className="carImg" src={require('../../assets/car.png')}/>
            <motion.img className="logo"  src={require('../../assets/logo.png')} alt="logo" 
                initial={{ x: -200}} animate={{ x: 0 }} transition={{ type: "tween", duration: 0.8  }} />
            <motion.div className="containerHeader" 
                initial={{ x: -150}} animate={{ x: 0 }} transition={{ type: "tween", duration: 0.8  }} >
            <h1 className="title">Ferrari is the Best<br/> Cars Mark of World?<hr/></h1>
            <h1 className="title2">Why Ferrari is the best mark car of the world<br/> and ho they did did this</h1>
            </motion.div>
        </div>
    )
}