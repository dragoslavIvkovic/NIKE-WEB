import React from 'react';
import '../../App.css';
import './Home.css'
import Discount_Img from '../images/Discount_Img.png'


export default function Home() {
  return (
    <>

      <h1 className='home_container'>
        <img src={Discount_Img} className="Discount_Img" alt="Discount_Img" />

      </h1>
    </>
  );
}



