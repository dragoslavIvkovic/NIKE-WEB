import React from 'react';
import '../../App.css';
import PizzasProps from './PizzasProps';
import { Button } from "../Button";

export default function Desserts() {
  return (
    <div className="flex-container">
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1607206608117-31f7a8a0ee46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80"
          name="Cake" />
        <Button />

      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1531240062960-4842b265a1ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=853&q=80"
          name="Ice Cream" />
        <Button />
      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1588258382591-5725de4bb861?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          name="Chocolate" />
        <Button />
      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          name="Pancake" />
        <Button />
      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          name="Cupcake" />
        <Button />
      </div>










    </div>
  );

}
