import React from "react";
import image from './images/Group 77.png'

export default function Hero(){
    const name = "Josh🤍 "
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 

    if (hours< 12) {
        timeOfDay = "morning"
    }else if ( hours > 12 && hours <17) {
        timeOfDay = "afternoon"
    }else if (hours>17 && hours <21) {
        timeOfDay = "evening"
    }else{
        timeOfDay = "night"
    }
    return (
        
        <section className="hero">
            <h1>Good {timeOfDay} {name}!</h1>

            <img src={image}className="hero-img"/>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">
            Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home. 
            </p>
        </section>
    )
}