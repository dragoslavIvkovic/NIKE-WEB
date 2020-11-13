import React from 'react';
import '../../App.css';
import PizzasProps from './PizzasProps';
import { Button } from "../Button";

export default function Pizzas() {
  return (
    <div className="flex-container">
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="Bob" />
        <Button />

      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          name="Bob" />
        <Button />
      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"
          name="Bob" />
        <Button />
      </div>










      />
    </div>
  );

}
