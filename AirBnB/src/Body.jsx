import React from "react";
import Star from './images/Star 1star.png'

export default function Body({img,name,price,country,rating,reviewCount}){
   

    return(
        <section>
            <div className="Xperience1">
                <img src= {img} alt="" className="X-img1" />
                <section>
                    <div className="rating">
                    <img src= {Star}alt="" className="star" />
                    <span className="gray" >{rating}</span>
                    <span className="gray">({reviewCount})• </span>
                    <span>{country}</span>
                    </div>
                    <p>{name}
                        <br />
                    <span className="bold">{price}</span> per person</p>
                </section>
            </div>
        </section> 
    )
}