import React from 'react'
import './Footbar.css'
import { FaTwitter, FaFacebookSquare, FaInstagram } from 'react-icons/fa';


export default function Footbar() {
    return (
        <div className='bottom'>
            <div className="social-icons">

                <button className="item1" onClick={(e) => (window.location = 'https://twitter.com/')}> <FaTwitter /></button>
                <button className="item1" onClick={(e) => (window.location = 'https://facebook.com/')}> <FaFacebookSquare /></button>
                <button className="item1" onClick={(e) => (window.location = 'https://instagram.com/')}> <FaInstagram /></button>






            </div>
        </div>
    )
}
