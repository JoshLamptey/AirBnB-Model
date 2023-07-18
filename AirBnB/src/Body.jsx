import React from "react";

import Star from './images/Star 1star.png'

export default function Body(props){
   

    return(
        <section>
            <div className="Xperience1">
                <img src= {props.img} alt="" className="X-img1" />
                <section>
                    <div className="rating">
                    <img src= {Star}alt="" className="star" />
                    <span className="gray" >5.0</span>
                    <span className="gray">(6) • </span>
                    <span>USA</span>
                    </div>
                    <p>{props.name}
                        <br />
                    <span className="bold">{props.price}</span> per person</p>
                </section>
            </div>
        </section> 
    )
}