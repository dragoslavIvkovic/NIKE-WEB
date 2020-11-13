import React from 'react';
import '../../App.css';
import PizzasProps from './PizzasProps';
import { Button } from "../Button";

export default function Pizzas() {
  return (
    <div className="flex-container">
      <div className="Card">
      <PizzasProps
        img="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
        name="Bob" />
        <Button />
        
        </div>
      <div className="Card">
      <PizzasProps
        img="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
        name="Bob" />
        <Button />
        </div>
      <div className="Card">
      <PizzasProps
        img="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
        name="Bob" />
        <Button />
        </div>

       
      



    
     


      />
    </div>
  );
   
}
