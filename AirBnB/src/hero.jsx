import React from "react";
import image from './images/Group 77.png'

export default function Hero(){
    return (
        <section className="hero">
            <img src={image}className="hero-img"/>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">
            Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home. 
            </p>
        </section>
    )
}