import React from "react";
import X from './images/image 12.png'
import Star from './images/Star 1star.png'

export default function Body(){
    return(
        <section>
            <div className="Xperience1">
                <img src= {X} alt="" className="X-img1" />
                <p>
                    <div className="rating">
                    <img src= {Star}alt="" className="star" />
                    <span className="gray" >5.0</span>
                    <span className="gray">(6) • </span>
                    <span>USA</span>
                    </div>
                    <p>Life Lessons with Katie Zaferes
                        <br />
                    <span className="bold">From $136/</span> per person</p>
                </p>
            </div>
        </section> 
    )
}