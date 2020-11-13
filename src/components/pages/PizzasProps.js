import React from 'react'
import "./PizzasProps.css"
import { Button } from "../Button";



function PizzasProps(props) {
    return (
        <>

            <img src={props.img} alt={props.name} className="imgCard" />

            <h2>{props.name} </h2>

        </>

    )
}


export default PizzasProps;




