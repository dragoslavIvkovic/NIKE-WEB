import React from 'react'
import PizzasProps from './PizzasProps'
import './PizzasProps.css'


function Pizzas() {
    return (
        <div >
            <PizzasProps 
                img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                name="PIZZA"
            />
            <PizzasProps
                img="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            <PizzasProps
                img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                name="PIZZA"
            />





        </div>
    )
}

export default Pizzas;
