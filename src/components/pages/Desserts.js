import React from 'react';
import '../../App.css';
import PizzasProps from './PizzasProps';
import { Button } from "../Button";

export default function Desserts() {
  return (
    <div className="flex-container">
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="Bob" />
        <Button />

      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1597895139270-a5dee112224d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="Bob" />
        <Button />
      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1575389371771-2ee5b9bba753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="Bob" />
        <Button />
      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1571506636496-dd2c945bde72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="Bob" />
        <Button />
      </div>
      <div className="Card">
        <PizzasProps
          img="https://images.unsplash.com/photo-1515544699701-86e5f26b66d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="Bob" />
        <Button />
      </div>










    </div>
  );

}
