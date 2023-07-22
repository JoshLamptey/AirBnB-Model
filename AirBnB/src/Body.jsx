import React from "react";
import Star from './images/Star 1star.png'

export default function Body({img,name,price}){
   

    return(
        <section>
            <div className="Xperience1">
                <img src= {img} alt="" className="X-img1" />
                <section>
                    <div className="rating">
                    <img src= {Star}alt="" className="star" />
                    <span className="gray" >5.0</span>
                    <span className="gray">(6) • </span>
                    <span>United States Of America</span>
                    </div>
                    <p>{name}
                        <br />
                    <span className="bold">{price}</span> per person</p>
                </section>
            </div>
        </section> 
    )
}