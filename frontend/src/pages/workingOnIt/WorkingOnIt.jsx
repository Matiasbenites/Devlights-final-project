import React from "react";
import hero from "../../assets/workingOnItHero.png"
import hero2 from "../../assets/workingOnItHero2.png"
import { Link } from "react-router-dom";

export default function WorkingOnIt() {
    return (
    <Link to="/" >
        <img className="hidden hero-work mx-auto sm:block  drop-shadow-[5px_5px_5px_rgba(0,0,0,0.23)]" src={hero} alt="Volver al inicio"/>
        <img className=" mx-auto sm:hidden  drop-shadow-[5px_5px_5px_rgba(0,0,0,0.23)]" src={hero2} alt="Volver al inicio"/>
    </Link>
    )
}